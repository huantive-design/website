"""Verify a remuxed MP4 still decodes: every chunk offset must land inside mdat."""
import struct
import sys


def boxes(data, start, end, out, depth=0):
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
        out.setdefault(kind, []).append((pos, size, header))
        if kind in ("moov", "trak", "mdia", "minf", "stbl"):
            boxes(data, pos + header, pos + size, out, depth + 1)
        pos += size
    return out


data = open(sys.argv[1], "rb").read()
b = boxes(data, 0, len(data), {})

mdat_pos, mdat_size, mdat_header = b["mdat"][0]
body_start = mdat_pos + mdat_header
body_end = mdat_pos + mdat_size
print(f"mdat_body={body_start}..{body_end}")

total = 0
bad = 0
first = None
last = None
for pos, size, header in b.get("stco", []):
    count = struct.unpack_from(">I", data, pos + header + 4)[0]
    base = pos + header + 8
    for i in range(count):
        off = struct.unpack_from(">I", data, base + i * 4)[0]
        total += 1
        if first is None or off < first:
            first = off
        if last is None or off > last:
            last = off
        if not (body_start <= off < body_end):
            bad += 1

print(f"chunk_offsets={total} out_of_range={bad}")
print(f"offset_range={first}..{last}")
print("RESULT=" + ("PASS — all chunk offsets inside mdat" if bad == 0 and total else "FAIL"))
