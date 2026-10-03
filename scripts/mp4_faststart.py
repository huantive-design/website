"""Read true video dimensions from the stsd/avc1 box and rewrite MP4 with moov first.

Dimensions come from the sample description (stsd), not tkhd, because tkhd holds
a display matrix that is easy to misparse. Moving moov ahead of mdat lets the
browser start playback before the whole file arrives.
"""
import struct
import sys


def parse_boxes(data, start, end, out, path=()):
    pos = start
    while pos + 8 <= end:
        size, kind = struct.unpack_from(">I4s", data, pos)
        kind = kind.decode("latin-1")
        header = 8
        if size == 1:
            size = struct.unpack_from(">Q", data, pos + 8)[0]
            header = 16
        elif size == 0:
            size = end - pos
        if size < header:
            break
        out.setdefault(kind, []).append((pos, size, header, path))
        if kind in ("moov", "trak", "mdia", "minf", "stbl"):
            parse_boxes(data, pos + header, pos + size, out, path + (kind,))
        if kind == "stsd":
            entry = pos + header + 8
            while entry + 8 <= pos + size:
                esize, ekind = struct.unpack_from(">I4s", data, entry)
                ekind = ekind.decode("latin-1")
                if ekind in ("avc1", "hvc1", "hev1", "mp4v", "av01"):
                    w = struct.unpack_from(">H", data, entry + 32)[0]
                    h = struct.unpack_from(">H", data, entry + 34)[0]
                    out.setdefault("_video", []).append((ekind, w, h))
                if esize < 8:
                    break
                entry += esize
        pos += size
    return out


def main():
    src, dst = sys.argv[1], sys.argv[2]
    data = bytearray(open(src, "rb").read())
    boxes = parse_boxes(data, 0, len(data), {})

    for codec, w, h in boxes.get("_video", []):
        print(f"codec={codec} width={w} height={h} aspect={round(w / h, 4)}")

    moov = boxes.get("moov", [None])[0]
    mdat = boxes.get("mdat", [None])[0]
    if not moov or not mdat:
        print("ERROR: missing moov or mdat")
        return 1

    moov_pos, moov_size = moov[0], moov[1]
    mdat_pos = mdat[0]
    if moov_pos < mdat_pos:
        print("already faststart; copying unchanged")
        open(dst, "wb").write(data)
        return 0

    moov_data = bytearray(data[moov_pos:moov_pos + moov_size])
    # Chunk offsets point at absolute file positions, so shift them by the size
    # of the moov block that now sits in front of the media data.
    shift = moov_size
    sub = parse_boxes(moov_data, 0, len(moov_data), {})
    patched = 0
    for pos, size, header, _ in sub.get("stco", []):
        count = struct.unpack_from(">I", moov_data, pos + header + 4)[0]
        base = pos + header + 8
        for i in range(count):
            off = struct.unpack_from(">I", moov_data, base + i * 4)[0]
            struct.pack_into(">I", moov_data, base + i * 4, off + shift)
        patched += count
    for pos, size, header, _ in sub.get("co64", []):
        count = struct.unpack_from(">I", moov_data, pos + header + 4)[0]
        base = pos + header + 8
        for i in range(count):
            off = struct.unpack_from(">Q", moov_data, base + i * 8)[0]
            struct.pack_into(">Q", moov_data, base + i * 8, off + shift)
        patched += count
    print(f"patched_chunk_offsets={patched}")

    rest = data[:moov_pos] + data[moov_pos + moov_size:]
    ftyp = boxes.get("ftyp", [None])[0]
    if ftyp and ftyp[0] == 0:
        split = ftyp[1]
        out = rest[:split] + moov_data + rest[split:]
    else:
        out = moov_data + rest
    open(dst, "wb").write(out)
    print(f"written={dst} size_mb={round(len(out) / 1048576, 2)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
