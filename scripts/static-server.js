const http = require('http');
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '../dist');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.xml': 'application/xml', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2' };

// The shell fallback is exclusively for build-time rendering, never deployed.
exports.serve = async function (shell) {
    const server = http.createServer((req, res) => {
        const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
        let file = path.resolve(root, '.' + pathname);
        if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
        if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
            if (!pathname.endsWith('/')) { res.writeHead(301, { Location: pathname + '/' }).end(); return; }
            file = path.join(file, 'index.html');
        }
        if (fs.existsSync(file) && fs.statSync(file).isFile()) {
            res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
            fs.createReadStream(file).pipe(res);
        } else if (shell && !path.extname(pathname)) {
            res.writeHead(200, { 'Content-Type': 'text/html' }).end(shell);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' }).end(fs.existsSync(path.join(root, '404.html')) ? fs.readFileSync(path.join(root, '404.html')) : 'Not found');
        }
    });
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    return { server, origin: `http://127.0.0.1:${server.address().port}` };
};
