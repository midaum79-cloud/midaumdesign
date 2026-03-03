import fs from "fs";
import path from "path";

export interface NoticeInfo {
    id: string;
    title: string;
    date: string;
    content: string;
}

const NOTICES_DIR = path.join(process.cwd(), "public", "notices");

/** Get all notices by scanning the notices folder */
export function getAllNotices(): NoticeInfo[] {
    if (!fs.existsSync(NOTICES_DIR)) return [];

    const folders = fs
        .readdirSync(NOTICES_DIR)
        .filter((f) => {
            const fullPath = path.join(NOTICES_DIR, f);
            return fs.statSync(fullPath).isDirectory();
        })
        .sort((a, b) => Number(b) - Number(a)); // Newest first

    return folders
        .map((folder) => {
            const infoPath = path.join(NOTICES_DIR, folder, "info.json");
            if (!fs.existsSync(infoPath)) return null;

            try {
                const raw = fs.readFileSync(infoPath, "utf-8");
                const info = JSON.parse(raw);
                return {
                    id: folder,
                    title: info.title || "Untitled",
                    date: info.date || "",
                    content: info.content || "",
                };
            } catch {
                return null;
            }
        })
        .filter(Boolean) as NoticeInfo[];
}
