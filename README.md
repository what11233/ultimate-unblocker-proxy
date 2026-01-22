# 🟢 Ultimate Unblocker Proxy

A web proxy application to access blocked or restricted websites. This repository includes multiple deployment options for different use cases.

## 📁 What's Inside

```
ultimate-unblocker-proxy/
├── server.js              # Node.js backend (powerful proxy with URL rewriting)
├── package.json           # Dependencies for Node.js
├── public/
│   └── index.html        # Frontend for Node.js version (use with server.js)
├── index.html            # Single-file HTML version (GitHub Pages & USB)
└── README.md
```

---

## 🚀 Option 1: Full Node.js Version (Most Powerful)

### Best For:
- ✅ Running on your own computer
- ✅ Using GitHub Codespaces
- ✅ Deploying to Render.com (free cloud hosting)
- ✅ Maximum control & best compatibility

### Quick Start (3 Steps)

**Step 1: Install Dependencies**
```bash
npm install
```

**Step 2: Start the Server**
```bash
npm start
```

**Step 3: Open in Browser**
- Go to `http://localhost:3000`
- Enter any website URL
- Click "Unblock Website"

### How It Works
1. You enter a URL in the browser
2. Your browser sends it to `server.js` (the backend)
3. The backend fetches the website
4. It removes security headers that block iframes
5. It rewrites all links to go back through the proxy
6. The result displays in an iframe

### Deploy to Render.com (Free & Always Online)
1. Push this repository to GitHub
2. Go to [Render.com](https://render.com)
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Set:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free
6. Click "Create Web Service"
7. Your URL will be: `https://your-service-name.onrender.com`

---

## 🌐 Option 2: Single HTML File (GitHub Pages & USB)

### Best For:
- ✅ GitHub Pages hosting (free)
- ✅ Portable on USB drive
- ✅ No server needed
- ⚠️ Some sites may not work (no URL rewriting)

### How to Use This Version

**File Location:** `index.html` (in repository root)

### Upload to GitHub Pages
1. Push this file to your GitHub repository
2. Go to repository **Settings** → **Pages**
3. Under "Build and deployment":
   - Select Branch: `main`
   - Click **Save**
4. Wait 1-2 minutes
5. Your site will be at: `https://your-username.github.io/ultimate-unblocker-proxy/`

### Save to USB Drive
1. Download `index.html` from this repository
2. Plug USB into your Chromebook
3. Copy `index.html` to the USB root
4. Plug USB into any computer
5. Open the file in Chrome (double-click it)
6. It works instantly with internet connection!

### Limitations
- Uses a public CORS proxy (api.allorigins.win)
- Slower than the Node.js version
- Some high-security sites may block it (Netflix, Discord, etc.)
- No URL rewriting (links may break)

---

## 🖥️ Option 3: GitHub Codespaces (Web-Based Development)

### Best For:
- ✅ Chromebook users
- ✅ No local setup needed
- ✅ Code in your browser

### Steps
1. Open your GitHub repository
2. Click **Code** → **Codespaces** → **Create codespace on main**
3. In the terminal, type:
   ```bash
   npm install
   npm start
   ```
4. Click the notification that says "Your application is running on port 3000"
5. Select "Open in Browser"

---

## 📱 For Chromebook Users

### If You Have GitHub Codespaces:
1. Go to `https://github.com/your-username/your-repo`
2. Open Codespaces
3. Run `npm install` then `npm start`
4. Open in browser when prompted

### If You Want a Single HTML File:
1. Use **Option 2** (Single HTML)
2. Upload to GitHub Pages OR
3. Save to USB and open the file directly

### If You Want Permanent Cloud Hosting:
1. Deploy to Render.com (see Option 1)
2. Share the link with anyone

---

## 🔑 Key Features

| Feature | Node.js | Single HTML |
|---------|---------|------------|
| Speed | ⚡ Fast | 🐌 Slow |
| Works Everywhere | ✅ Yes | ✅ Yes |
| URL Rewriting | ✅ Yes | ❌ No |
| Cloud Hosting | ✅ Render.com | ✅ GitHub Pages |
| USB Portable | ✅ (requires Node) | ✅ Works instantly |
| Security Headers Bypass | ✅ Full | ⚠️ Partial |

---

## 💾 Saving Your Work

### From GitHub Codespaces:
1. Make changes to files
2. Click **Source Control** (left sidebar)
3. Type a message (e.g., "My changes")
4. Click **Commit**
5. Click **Sync Changes**

### From Local Computer:
```bash
git add .
git commit -m "My changes"
git push
```

---

## 🐛 Troubleshooting

### "Cannot GET /proxy"
- Make sure `server.js` is running
- Try visiting `http://localhost:3000` directly
- Check that dependencies are installed (`npm install`)

### "Error loading page"
- The website may be blocking the proxy
- Some sites have strong security that can't be bypassed
- Try a different website to test

### "Permission denied"
- Make sure you're in the correct folder
- Run `npm install` first

### Single HTML file not working
- Make sure you have internet connection
- Some sites block api.allorigins.win
- Try uploading it to GitHub Pages instead

---

## ⚠️ Important Notes

1. **Legal Use Only**: This tool is for educational purposes. Use responsibly and ethically.
2. **Terms of Service**: Check the website's ToS before accessing through a proxy.
3. **No Guarantee**: Some sites are designed to block proxies and may not work.
4. **Privacy**: Be aware that your connection goes through this proxy.

---

## 📚 Learning Resources

### How Proxies Work:
1. **Frontend** (HTML) - What you see
2. **Backend** (Node.js) - What fetches the data
3. **URL Rewriting** - Making links work through the proxy
4. **Header Stripping** - Removing security that blocks iframes

### Next Steps:
- Add authentication (username/password)
- Add caching (faster second loads)
- Add logging (see what sites people visit)
- Improve regex for better link rewriting

---

## 📞 Support

If something doesn't work:
1. Check the browser console (F12 → Console)
2. Check the terminal for error messages
3. Try a different website
4. Restart the server (`Ctrl+C`, then `npm start`)

---

## 📄 License

MIT - Feel free to use, modify, and share!

---

**Made with 🟢 by the Ultimate Unblocker Team**

*Last Updated: January 2026*
help wanted
