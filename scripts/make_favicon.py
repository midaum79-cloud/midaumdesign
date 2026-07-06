import sys
from PIL import Image

def make_favicons(input_path, out_icon, out_apple, out_ico):
    print(f"Opening {input_path}...")
    img = Image.open(input_path)
    
    # Pad to square
    w, h = img.size
    max_dim = max(w, h)
    
    # Create a transparent square canvas
    square_img = Image.new('RGBA', (max_dim, max_dim), (255, 255, 255, 0))
    
    # Paste the logo in the center
    offset = ((max_dim - w) // 2, (max_dim - h) // 2)
    square_img.paste(img, offset)
    
    # Resize and save
    print("Saving icon.png (512x512)...")
    icon = square_img.resize((512, 512), Image.Resampling.LANCZOS)
    icon.save(out_icon, "PNG")
    
    print("Saving apple-icon.png (180x180)...")
    apple = square_img.resize((180, 180), Image.Resampling.LANCZOS)
    apple.save(out_apple, "PNG")
    
    print("Saving favicon.ico (32x32)...")
    ico = square_img.resize((32, 32), Image.Resampling.LANCZOS)
    ico.save(out_ico, format='ICO', sizes=[(32, 32)])

if __name__ == "__main__":
    make_favicons(
        "public/images/uncle_logo_transparent.png",
        "src/app/icon.png",
        "src/app/apple-icon.png",
        "src/app/favicon.ico"
    )
