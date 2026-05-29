"""Generate JPG thumbnails (replace with real screenshots when available)."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PROJECTS = ROOT / "assets" / "img" / "projects"

ITEMS = [
    ("nedd-ong", "NEDD ONG", "Association / ONG", (255, 159, 67)),
    ("distrimag", "Distrimag", "Distribution", (94, 196, 255)),
    ("sos-toitures", "SOS Toitures", "Toiture", (66, 224, 136)),
    ("elagage-orleans", "Élagage Orléans", "Élagage", (66, 224, 136)),
    ("toitures-paris", "Toitures de Paris", "Toiture", (94, 196, 255)),
    ("darsaf-tech", "DARSAF Tech", "Technologie", (120, 140, 255)),
    ("abdoul-shop", "Abdoul Shop", "Boutique", (255, 120, 180)),
    ("france-batiment", "France Bâtiment", "BTP", (94, 196, 255)),
    ("wd-toiture", "WD Toiture", "Landing page", (66, 224, 136)),
    ("presta-benin", "PRESTA Bénin", "Plateforme", (255, 159, 67)),
    ("ajdc", "AJDC", "Association", (94, 196, 255)),
    ("portfolio-tech", "Portfolio Tech", "Développeur", (120, 140, 255)),
]

W, H = 1280, 820


def font(size, bold=False):
    names = ["arialbd.ttf", "arial.ttf"] if bold else ["arial.ttf", "segoeui.ttf"]
    for name in names:
        try:
            return ImageFont.truetype(name, size)
        except OSError:
            continue
    return ImageFont.load_default()


def make_card(slug, title, subtitle, accent):
    img = Image.new("RGB", (W, H), (8, 14, 24))
    draw = ImageDraw.Draw(img)
    for i in range(H):
        t = i / H
        r = int(8 + (accent[0] * 0.08) * (1 - t))
        g = int(14 + (accent[1] * 0.08) * (1 - t))
        b = int(24 + (accent[2] * 0.08) * (1 - t))
        draw.line([(0, i), (W, i)], fill=(r, g, b))

  # browser frame
    draw.rounded_rectangle((70, 70, W - 70, H - 70), radius=22, fill=(247, 249, 252))
    draw.rounded_rectangle((70, 70, W - 70, 140), radius=22, fill=(14, 27, 45))
    for i, c in enumerate([(255, 107, 107), (255, 209, 102), (56, 217, 123)]):
        draw.ellipse((100 + i * 30, 95, 116 + i * 30, 111), fill=c)

    draw.rounded_rectangle((110, 200, 620, 420), radius=16, fill=(230, 235, 242))
    draw.rounded_rectangle((680, 200, W - 110, 520), radius=16, fill=(220, 228, 238))
    draw.rounded_rectangle((110, 460, 280, 520), radius=12, fill=accent)

    draw.text((110, 560), title, fill=(11, 22, 38), font=font(52, True))
    draw.text((110, 630), subtitle, fill=(104, 117, 138), font=font(26))
    draw.text(
        (110, 680),
        "Remplacez par une capture réelle du site",
        fill=accent,
        font=font(18),
    )

    out = PROJECTS / f"{slug}.jpg"
    img.save(out, "JPEG", quality=88, optimize=True)
    print(f"ok {out.name}")


def main():
    PROJECTS.mkdir(parents=True, exist_ok=True)
    for item in ITEMS:
        make_card(*item)
    # hero composite
    hero = Image.new("RGB", (W, H), (6, 10, 18))
    draw = ImageDraw.Draw(hero)
    draw.text((80, 360), "Aperçu des réalisations", fill=(200, 220, 240), font=font(40, True))
    hero.save(ROOT / "assets" / "img" / "hero-realisations.jpg", "JPEG", quality=88)
    print("ok hero-realisations.jpg")


if __name__ == "__main__":
    main()
