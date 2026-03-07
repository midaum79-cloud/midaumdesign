/**
 * Portfolio Processing Script v2
 * 
 * Improved version that ensures NO images are lost.
 * 
 * 1. Reads ALL image files (jpg, jpeg, png) from each folder
 * 2. Converts each to WebP (max 1920px, quality 85 for better quality)
 * 3. Renames to numbered files (1.webp, 2.webp, ...) — keeping original sort order
 * 4. Uses image named "1.jpg" as thumbnail (thumb.webp at 800px)
 * 5. Creates info.json with title, size, category extracted from folder name
 * 6. Removes originals ONLY after confirming all conversions succeeded
 * 7. Logs every step for verification
 */

import fs from "fs";
import path from "path";
import sharp from "sharp";

const PORTFOLIO_DIR = path.join(process.cwd(), "public", "portfolio");
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png"];
const MAX_WIDTH = 1920;
const THUMB_WIDTH = 800;
const QUALITY = 85;

// Commercial keywords for category classification
const COMMERCIAL_KEYWORDS = [
    "학원", "매장", "센터", "고시텔", "사무실", "음식점", "피트니스",
    "뷰티샵", "메이크업", "필라테스", "화장품", "상담센터", "전문점",
    "영어", "논술", "미술", "국어", "보컬", "댄스", "가발", "의류"
];

function extractInfoFromFolderName(folderName) {
    const nfc = folderName.normalize("NFC");

    // Extract size (평수) - look for patterns like "38평", "32평"
    const sizeMatch = nfc.match(/(\d+)평/);
    const size = sizeMatch ? `${sizeMatch[1]}평` : "";

    // Title is the folder name without the trailing 평수
    const title = nfc.replace(/\s*\d+평$/, "").trim();

    // Category
    const isCommercial = COMMERCIAL_KEYWORDS.some(kw => nfc.includes(kw));
    const category = isCommercial ? "commercial" : "residential";

    return { title, size, category };
}

async function processFolder(folderPath, folderName) {
    // Get ALL image files
    const allFiles = fs.readdirSync(folderPath);
    const imageFiles = allFiles
        .filter(f => {
            const ext = path.extname(f).toLowerCase();
            return IMAGE_EXTENSIONS.includes(ext);
        })
        .sort((a, b) => {
            // Put "1.jpg" first (it's the designated thumbnail)
            const aNum = a.match(/^(\d+)\./);
            const bNum = b.match(/^(\d+)\./);
            if (aNum && bNum) return parseInt(aNum[1]) - parseInt(bNum[1]);
            if (aNum) return -1;
            if (bNum) return 1;
            return a.localeCompare(b);
        });

    if (imageFiles.length === 0) {
        console.log(`  ⚠ No images found in: ${folderName}`);
        return false;
    }

    console.log(`  📁 ${folderName}: ${imageFiles.length} images to process`);

    // Phase 1: Convert all images to WebP with temp names to avoid conflicts
    const tempFiles = [];
    let thumbSource = null;
    let conversionErrors = 0;

    for (let i = 0; i < imageFiles.length; i++) {
        const srcFile = path.join(folderPath, imageFiles[i]);
        const tempName = `__temp_${i + 1}.webp`;
        const tempFile = path.join(folderPath, tempName);

        // Track the source for thumbnail (the file named "1.jpg" or first file)
        if (imageFiles[i].match(/^1\.(jpg|jpeg|png)$/i) || (i === 0 && !thumbSource)) {
            thumbSource = srcFile;
        }

        try {
            const image = sharp(srcFile);
            const metadata = await image.metadata();

            const resizeOptions = metadata.width > MAX_WIDTH
                ? { width: MAX_WIDTH }
                : undefined;

            await image
                .resize(resizeOptions)
                .webp({ quality: QUALITY })
                .toFile(tempFile);

            tempFiles.push({ src: srcFile, temp: tempFile, index: i + 1 });

        } catch (err) {
            console.error(`    ❌ Failed: ${imageFiles[i]} — ${err.message}`);
            conversionErrors++;
        }
    }

    // Verify: ALL images must be converted before proceeding
    if (conversionErrors > 0) {
        console.error(`  ❌ ${conversionErrors} conversion errors in ${folderName}. Skipping folder.`);
        // Clean up temp files
        for (const t of tempFiles) {
            try { fs.unlinkSync(t.temp); } catch { }
        }
        return false;
    }

    if (tempFiles.length !== imageFiles.length) {
        console.error(`  ❌ Mismatch: ${tempFiles.length} converted vs ${imageFiles.length} original. Skipping.`);
        for (const t of tempFiles) {
            try { fs.unlinkSync(t.temp); } catch { }
        }
        return false;
    }

    console.log(`    ✅ All ${tempFiles.length} images converted successfully`);

    // Phase 2: Generate thumbnail from the designated source
    if (thumbSource) {
        try {
            const thumbFile = path.join(folderPath, "thumb.webp");
            await sharp(thumbSource)
                .resize({ width: THUMB_WIDTH })
                .webp({ quality: QUALITY })
                .toFile(thumbFile);
            console.log(`    ✅ Thumbnail generated`);
        } catch (err) {
            console.error(`    ❌ Thumbnail failed: ${err.message}`);
        }
    }

    // Phase 3: Remove originals and rename temp files
    for (const t of tempFiles) {
        try {
            fs.unlinkSync(t.src);
        } catch (err) {
            console.error(`    ⚠ Could not remove: ${path.basename(t.src)}`);
        }
    }

    // Also remove any existing webp files that aren't our temp files or thumb
    const existingWebps = fs.readdirSync(folderPath)
        .filter(f => f.endsWith('.webp') && !f.startsWith('__temp_') && f !== 'thumb.webp');
    for (const w of existingWebps) {
        try { fs.unlinkSync(path.join(folderPath, w)); } catch { }
    }

    // Rename temp files to final names
    for (const t of tempFiles) {
        const finalFile = path.join(folderPath, `${t.index}.webp`);
        fs.renameSync(t.temp, finalFile);
    }

    console.log(`    ✅ Renamed to 1.webp — ${tempFiles.length}.webp`);

    // Phase 4: Create info.json
    const { title, size, category } = extractInfoFromFolderName(folderName);
    const infoPath = path.join(folderPath, "info.json");
    const info = {
        title,
        size,
        category,
        description: `${title} 인테리어 시공사례`
    };
    fs.writeFileSync(infoPath, JSON.stringify(info, null, 2), "utf-8");
    console.log(`    ✅ info.json created: "${title}" / ${size} / ${category}`);

    return true;
}

async function main() {
    console.log("🚀 Portfolio Processing Script v2");
    console.log("==================================\n");
    console.log("Settings: maxWidth=" + MAX_WIDTH + "px, quality=" + QUALITY + ", thumbWidth=" + THUMB_WIDTH + "px\n");

    if (!fs.existsSync(PORTFOLIO_DIR)) {
        console.error("Portfolio directory not found:", PORTFOLIO_DIR);
        process.exit(1);
    }

    const folders = fs.readdirSync(PORTFOLIO_DIR)
        .filter(f => {
            const fullPath = path.join(PORTFOLIO_DIR, f);
            return fs.statSync(fullPath).isDirectory();
        })
        .sort();

    console.log(`Found ${folders.length} portfolio folders\n`);

    let processed = 0;
    let failed = 0;
    let totalImages = 0;

    for (const folder of folders) {
        const folderPath = path.join(PORTFOLIO_DIR, folder);
        try {
            const success = await processFolder(folderPath, folder);
            if (success) {
                processed++;
                const webpCount = fs.readdirSync(folderPath)
                    .filter(f => /^\d+\.webp$/.test(f)).length;
                totalImages += webpCount;
            } else {
                failed++;
            }
        } catch (err) {
            console.error(`❌ Fatal error in ${folder}: ${err.message}`);
            failed++;
        }
    }

    console.log(`\n==================================`);
    console.log(`✅ Processed: ${processed}/${folders.length} folders`);
    if (failed > 0) console.log(`❌ Failed: ${failed} folders`);
    console.log(`📸 Total images: ${totalImages}`);
    console.log(`\n📊 Run 'du -sh public/portfolio/' to check final size`);
}

main().catch(console.error);
