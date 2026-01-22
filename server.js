const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Function to rewrite all URLs so they point back through the proxy
function rewriteUrls(html, targetUrl, proxyBase) {
    try {
        return html.replace(/(href|src)=["']([^"']*)["']/g, (match, attr, value) => {
            // Don't rewrite data URIs or anchors
            if (value.startsWith('data:') || value.startsWith('#')) return match;
            
            try {
                // Convert relative URLs to absolute using the target site as the base
                const absoluteUrl = new URL(value, targetUrl).toString();
                // Return the rewritten URL pointing back to our proxy
                return `${attr}="${proxyBase}?url=${encodeURIComponent(absoluteUrl)}"`;
            } catch (e) {
                return match;
            }
        });
    } catch (e) {
        return html;
    }
}

// Main proxy endpoint
app.get('/proxy', async (req, res) => {
    const targetUrl = req.query.url;
    
    if (!targetUrl) {
        return res.status(400).send('❌ No URL provided. Use: /proxy?url=https://example.com');
    }

    try {
        console.log(`🔄 Fetching: ${targetUrl}`);
        
        const response = await axios.get(targetUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            },
            responseType: 'text',
            timeout: 10000
        });

        const contentType = response.headers['content-type'] || 'text/html';
        
        // Remove security headers that block iframes
        res.removeHeader('X-Frame-Options');
        res.removeHeader('Content-Security-Policy');
        res.set('Content-Security-Policy', "frame-ancestors *");

        // If it's HTML, rewrite all the URLs
        if (contentType.includes('text/html')) {
            const proxyBase = `${req.protocol}://${req.get('host')}/proxy`;
            const rewrittenHtml = rewriteUrls(response.data, targetUrl, proxyBase);
            return res.set('Content-Type', 'text/html; charset=utf-8').send(rewrittenHtml);
        }

        // For images, CSS, JS, etc., just pass through
        res.set('Content-Type', contentType);
        res.send(response.data);

    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        res.status(500).send(`
            <h1>❌ Error Loading Page</h1>
            <p>${error.message}</p>
            <p>The site may be blocking this proxy or is temporarily unavailable.</p>
            <a href="/">← Go Back</a>
        `);
    }
});

app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════╗
║   🟢 Ultimate Unblocker Proxy Started  ║
╚════════════════════════════════════════╝
📍 Server: http://localhost:${PORT}
🌐 Open your browser to start unblocking!
    `);
});
