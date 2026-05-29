"""Convert SVG placeholders to JPG for sharper project thumbnails."""
from pathlib import Path

try:
    from svglib.svglib import svg2rlg
    from reportlab.graphics import renderPM
except ImportError:
    raise SystemExit("Install: pip install svglib reportlab")

ROOT = Path(__file__).resolve().parents[1]
DIRS = [
    ROOT / "assets" / "img" / "projects",
    ROOT / "assets" / "img" / "services",
]

for folder in DIRS:
    if not folder.is_dir():
        continue
    for svg in folder.glob("*.svg"):
        jpg = svg.with_suffix(".jpg")
        drawing = svg2rlg(str(svg))
        if drawing is None:
            print(f"skip {svg.name}")
            continue
        renderPM.drawToFile(drawing, str(jpg), fmt="JPG", dpi=144)
        print(f"ok {jpg.relative_to(ROOT)}")
