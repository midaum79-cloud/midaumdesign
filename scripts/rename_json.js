const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../public');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Replace sequences
    content = content.replace(/주식회사 미다움/g, '목수삼촌 실내건축');
    content = content.replace(/미다움 디자인/g, '목수삼촌 실내건축');
    content = content.replace(/미다움디자인/g, '목수삼촌 실내건축');
    content = content.replace(/미다움/g, '목수삼촌');
    content = content.replace(/Midaum Design/gi, '목수삼촌 실내건축');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function traverseDirectory(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            traverseDirectory(fullPath);
        } else if (stat.isFile() && /\.(json|txt)$/.test(file)) {
            replaceInFile(fullPath);
        }
    }
}

traverseDirectory(directoryPath);
console.log('Replacement complete in public directory.');
