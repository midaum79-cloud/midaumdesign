import fs from "fs";
import path from "path";
import sizeOf from "image-size";

export interface ProjectInfo {
    id: string;
    title: string;
    size: string;
    description: string;
    category: string;
    thumb: string;
    imageCount: number;
}

const PORTFOLIO_DIR = path.join(process.cwd(), "public", "portfolio");

/** Get all projects by scanning the portfolio folder */
export function getAllProjects(): ProjectInfo[] {
    if (!fs.existsSync(PORTFOLIO_DIR)) return [];

    const folders = fs
        .readdirSync(PORTFOLIO_DIR)
        .filter((f) => {
            const fullPath = path.join(PORTFOLIO_DIR, f);
            return fs.statSync(fullPath).isDirectory();
        })
        .sort((a, b) => a.localeCompare(b, 'ko'));

    return folders
        .map((folder) => {
            const infoPath = path.join(PORTFOLIO_DIR, folder, "info.json");
            if (!fs.existsSync(infoPath)) return null;

            try {
                const raw = fs.readFileSync(infoPath, "utf-8");
                const info = JSON.parse(raw);

                // Count numbered image files (1.png, 2.jpg, etc.)
                const files = fs.readdirSync(path.join(PORTFOLIO_DIR, folder));
                const imageFiles = files.filter((f) => /^\d+\.(png|jpg|jpeg|webp)$/i.test(f));

                return {
                    id: folder.normalize("NFC"),
                    title: info.title || "Untitled",
                    size: info.size || "",
                    description: info.description || "",
                    category: info.category || "residential",
                    thumb: `/portfolio/${folder}/thumb.webp`,
                    imageCount: imageFiles.length,
                };
            } catch {
                return null;
            }
        })
        .filter((p) => p !== null && (p.category === "academy" || p.category === "office")) as ProjectInfo[];
}

/** Get a single project by ID */
export function getProjectById(id: string): (ProjectInfo & { images: { src: string; orientation: 'landscape' | 'portrait' }[] }) | null {
    // Normalize Unicode to handle macOS NFD vs URL NFC mismatch
    const normalizedId = id.normalize("NFC");

    // Find the actual folder by comparing normalized names
    const folders = fs.readdirSync(PORTFOLIO_DIR).filter(f => {
        const fullPath = path.join(PORTFOLIO_DIR, f);
        return fs.statSync(fullPath).isDirectory();
    });

    const actualFolder = folders.find(
        (f) => f.normalize("NFC") === normalizedId
    );

    if (!actualFolder) return null;
    const projectDir = path.join(PORTFOLIO_DIR, actualFolder);
    if (!fs.statSync(projectDir).isDirectory()) return null;

    const infoPath = path.join(projectDir, "info.json");
    if (!fs.existsSync(infoPath)) return null;

    try {
        const raw = fs.readFileSync(infoPath, "utf-8");
        const info = JSON.parse(raw);

        const files = fs.readdirSync(projectDir);
        const imageFiles = files
            .filter((f) => /^\d+\.(png|jpg|jpeg|webp)$/i.test(f))
            .sort((a, b) => {
                const numA = parseInt(a.split(".")[0]);
                const numB = parseInt(b.split(".")[0]);
                return numA - numB;
            })
            .map((f) => {
                const fullPath = path.join(projectDir, f);
                let orientation: 'landscape' | 'portrait' = 'landscape';
                try {
                    const buffer = fs.readFileSync(fullPath);
                    const dimensions = sizeOf(buffer);
                    if (dimensions.height && dimensions.width && dimensions.height > dimensions.width) {
                        orientation = 'portrait';
                    }
                } catch (e) {
                    console.error(`Error reading dimensions for ${f}`, e);
                }
                return {
                    src: `/portfolio/${actualFolder}/${f}`,
                    orientation
                };
            });

        return {
            id: normalizedId,
            title: info.title || "Untitled",
            size: info.size || "",
            description: info.description || "",
            category: info.category || "residential",
            thumb: `/portfolio/${actualFolder}/thumb.webp`,
            imageCount: imageFiles.length,
            images: imageFiles,
        };
    } catch {
        return null;
    }
}
