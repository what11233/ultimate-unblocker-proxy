# 🚀 Quick Start Guide - Ultimate Unblocker

## ⚡ For Your Chromebook (3 Easy Options)

---

## **OPTION A: GitHub Codespaces (Easiest for Chromebook)**

You're already here! This is the easiest way.

### To Run:
```bash
npm start
```

### Then:
- Wait for "Your application is running on port 3000" message
- Click "Open in Browser"
- Enter any website URL
- Hit "Unblock Website"

**That's it! Everything works.**

---

## **OPTION B: Single HTML File (No Server Needed)**

Want a super simple version that works anywhere?

### How to get it:
1. Find the file `index.html` in the root of this repository
2. Download it to your Chromebook
3. Save to USB drive (just copy & paste)
4. Double-click the file in Chrome
5. It works instantly!

**Pros:** Works on USB, super simple
**Cons:** Some sites may not work (no rewriting)

---

## **OPTION C: Deploy to Render.com (24/7 Cloud Hosting)**

Want a link you can share that's always online?

### Steps:
1. Make sure all your code is pushed to GitHub
   - Open Terminal
   - Type:
     ```bash
     git add .
     git commit -m "Ready to deploy"
     git push
     ```

2. Go to https://render.com
3. Sign up with GitHub
4. Click "New +" → "Web Service"
5. Select your repository
6. Set:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Instance: Free
7. Click "Create Web Service"
8. Done! You'll get a link like `https://my-unblocker.onrender.com`

---

## 🗂️ File Structure Explained

```
📦 ultimate-unblocker-proxy
├─ 📄 server.js          ← Backend (does the heavy lifting)
├─ 📄 package.json       ← Dependencies list
├─ 📄 index.html         ← Single-file version (GitHub Pages/USB)
├─ 📂 public/
│  └─ 📄 index.html      ← Frontend (for server.js)
└─ 📄 README.md          ← Full documentation
```

---

## 💡 How It Works (Simple Explanation)

### Browser → Your Server → Target Website → Back to You

1. **You type a URL** in the text box
2. **Browser sends it** to `server.js` (your backend)
3. **server.js fetches** the actual website
4. **server.js removes** security headers that block iframes
5. **server.js rewrites** all links to go through itself
6. **Browser displays** the result in an iframe

**Result:** You can see websites that were blocked!

---

## ⚙️ Common Commands

| What You Want | Command |
|--------------|---------|
| Start the server | `npm start` |
| Install dependencies | `npm install` |
| Push to GitHub | `git push` |
| Check for errors | Open browser console (F12) |

---

## 🐛 If Something Goes Wrong

### Error: "Cannot GET /proxy"
- Make sure `npm start` is running
- Refresh the browser

### Error: "Failed to load page"
- The website may be blocking the proxy
- Try a different website first (like example.com)

### Error: "Cannot find module"
- Run `npm install`

---

## 🔐 Security Notes

✅ **Safe for:**
- Educational learning
- Testing (your own sites)
- Bypassing school/work blocks (with permission)

❌ **NOT for:**
- Illegal activities
- Bypassing security you're not authorized to bypass
- Accessing content against terms of service

---

## 📱 For USB Users

### To save to USB:
1. Plug USB into Chromebook
2. Find `index.html` in your files
3. Copy it
4. Paste into USB
5. Plug USB into any computer
6. Double-click the file
7. **It just works!** No installation needed

---

## 🎯 Next Steps

1. ✅ Run it locally first (`npm start`)
2. ✅ Test with simple websites (google.com, example.com)
3. ✅ Save to USB for portability
4. ✅ Deploy to Render.com for 24/7 access
5. ✅ Share with friends

---

## 📞 Stuck?

1. Check browser console: **F12** → **Console**
2. Check terminal for error messages
3. Restart the server: **Ctrl+C** then `npm start`
4. Read the full README.md file
5. Ask for help!

---

**You've got this! 🚀**
