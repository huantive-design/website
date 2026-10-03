"""Read MP4 metadata without external tools: dimensions, duration, moov position."""
import struct
import sys

path = sys.argv[1]

def read_boxes(f, end, depth=0, found=None):
    if found is None:
        found = {}
    while f.tell() < end:
        start = f.tell()
        header = f.read(8)
        if len(header) < 8:
            break
        size, kind = struct.unpack(">I4s", header)
        kind = kind.decode("latin-1")
        if size == 1:
            size = struct.unpack(">Q", f.read(8))[0]
            body = start + 16
        elif size == 0:
            size = end - start
            body = start + 8
        else:
            body = start + 8
        if kind == "moov" and "moov_offset" not in found:
            found["moov_offset"] = start
        if kind == "mdat" and "mdat_offset" not in found:
            found["mdat_offset"] = start
        if kind == "mvhd":
            f.seek(body)
            ver = f.read(1)[0]
            f.read(3)
            if ver == 1:
                f.read(16)
                timescale = struct.unpack(">I", f.read(4))[0]
                duration = struct.unpack(">Q", f.read(8))[0]
            else:
                f.read(8)
                timescale = struct.unpack(">I", f.read(4))[0]
                duration = struct.unpack(">I", f.read(4))[0]
            if timescale:
                found["duration_s"] = round(duration / timescale, 2)
        if kind == "tkhd":
            f.seek(body)
            ver = f.read(1)[0]
            f.read(3)
            f.read(16 if ver == 1 else 8)
            f.read(4)
            f.read(4)
            f.read(8)
            f.read(2 + 2 + 2 + 2)
            f.read(36)
            w = struct.unpack(">I", f.read(4))[0] >> 16
            h = struct.unpack(">I", f.read(4))[0] >> 16
            if w and h:
                found.setdefault("tracks", []).append((w, h))
        if kind in ("moov", "trak", "mdia", "minf", "stbl", "edts"):
            f.seek(body)
            read_boxes(f, start + size, depth + 1, found)
        f.seek(start + size)
    return found

with open(path, "rb") as f:
    f.seek(0, 2)
    total = f.tell()
    f.seek(0)
    info = read_boxes(f, total)

tracks = info.get("tracks", [])
video = max(tracks, key=lambda t: t[0] * t[1]) if tracks else None
print(f"file_size_mb={round(total / 1048576, 2)}")
print(f"duration_s={info.get('duration_s')}")
print(f"video_dimensions={video}")
if video:
    print(f"aspect_ratio={round(video[0] / video[1], 4)}")
moov = info.get("moov_offset")
mdat = info.get("mdat_offset")
print(f"moov_offset={moov} mdat_offset={mdat}")
if moov is not None and mdat is not None:
    print(f"faststart={'YES' if moov < mdat else 'NO — needs remux for progressive playback'}")
