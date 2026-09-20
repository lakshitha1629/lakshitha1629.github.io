const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function main() {
    let before = 0, after = 0;
    for (const folder of ['profile', 'work']) {
        for (const file of fs.readdirSync(path.join('public', folder))) {
            if (!/\.png$/i.test(file)) continue;
            const source = path.join('public', folder, file);
            const output = path.join('public/optimized', folder, file.replace(/\.[^.]+$/, '.webp'));
            fs.mkdirSync(path.dirname(output), { recursive: true });
            // Preserve pixels, dimensions and alpha; no visual quality loss.
            if (!fs.existsSync(output) || fs.statSync(output).mtimeMs < fs.statSync(source).mtimeMs) {
                await sharp(source).webp({ lossless: true }).toFile(output);
            }
            before += fs.statSync(source).size;
            after += fs.statSync(output).size;
        }
    }
    console.log(`Lossless image variants: ${before} -> ${after} bytes.`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
