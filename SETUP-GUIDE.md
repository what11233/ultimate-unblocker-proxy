# 📖 Complete Setup Guide - All 3 Options

## 🎯 Choose Your Path

---

# **PATH 1: Run Locally on Your Chromebook (GitHub Codespaces)**

This is where you are right now! 

## Step 1: Install Dependencies
```bash
npm install
```
*(It will add ~80 packages - this takes about 30 seconds)*

## Step 2: Start the Server
```bash
npm start
```

**You should see:**
```
╔════════════════════════════════════════╗
║   🟢 Ultimate Unblocker Proxy Started  ║
╚════════════════════════════════════════╝
📍 Server: http://localhost:3000
🌐 Open your browser to start unblocking!
```

## Step 3: Open in Browser
- Look for a **blue notification** in the corner
- Click **"Open in Browser"** or go to `http://localhost:3000`
- You'll see the Ultimate Unblocker interface

## Step 4: Test It
1. Type a URL: `example.com`
2. Click **"🚀 Unblock Website"**
3. The website loads in the iframe!

## Step 5: Stop the Server
Press `Ctrl + C` in the terminal

---

# **PATH 2: Save as Single HTML File (USB & GitHub Pages)**

## What is This?
- One `.html` file
- No `server.js` needed
- No installation required
- Just double-click to use
- Perfect for USB drives

## File Location
```
📄 index.html  (in the root folder)
```

### Use Case A: Save to USB Drive

#### Step 1: Find the File
- Open your Files app
- Navigate to: `ultimate-unblocker-proxy/`
- Find `index.html`

#### Step 2: Copy to USB
1. Plug USB into Chromebook
2. Right-click `index.html`
3. Click **Copy**
4. Right-click in USB folder
5. Click **Paste**

#### Step 3: Use It Anywhere
- Unplug USB
- Plug into any computer (Windows, Mac, Chromebook)
- Open Files app
- Double-click `index.html`
- **It opens in Chrome automatically!**

#### Step 4: Update It
- Make changes to `index.html` on your computer
- Copy it back to USB
- Done!

### Use Case B: GitHub Pages (Free Cloud Hosting)

#### Step 1: Push to GitHub
In terminal:
```bash
git add index.html
git commit -m "Add single-file unblocker for GitHub Pages"
git push
```

#### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub.com
2. Click **Settings** (gear icon)
3. On left, click **Pages**
4. Under "Build and deployment":
   - Branch: Select `main`
   - Click **Save**
5. Wait 1-2 minutes
6. Refresh the page

#### Step 3: Get Your Link
You'll see a message like:
```
Your site is live at:
https://YOUR-USERNAME.github.io/ultimate-unblocker-proxy/
```

**That's your permanent link!** Share it with anyone.

#### Step 4: Update the Site
- Edit `index.html` on your computer
- Push to GitHub
- Changes live within seconds!

---

# **PATH 3: Deploy to Render.com (24/7 Production Server)**

This is best if you want a professional server that never stops.

## Prerequisites
- GitHub account (already have it!)
- This code pushed to GitHub

## Step 1: Push Your Code
Make sure everything is saved to GitHub:

```bash
git add .
git commit -m "Ready for production deployment"
git push
```

## Step 2: Sign Up for Render
1. Go to https://render.com
2. Click **Sign up**
3. Choose **Sign in with GitHub**
4. Authorize Render to access your GitHub

## Step 3: Create Web Service
1. On Render dashboard, click **New +** (top right)
2. Select **Web Service**
3. Click **Connect** next to your `ultimate-unblocker-proxy` repository
4. If it asks "Connect anyway?", click **Yes**

## Step 4: Configure
Fill in these fields:

| Field | Value |
|-------|-------|
| **Name** | my-unblocker (or whatever you like) |
| **Runtime** | Node |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Instance Type** | Free |

## Step 5: Deploy
- Click **Create Web Service**
- Wait 2-3 minutes while it builds and deploys
- You'll see a message: **"Live"** with a URL like:
  ```
  https://my-unblocker.onrender.com
  ```

## Step 6: Use It
- Visit that URL from anywhere
- It works 24/7!
- Share with friends
- Updates automatically when you push to GitHub

## Important Note
**Free tier "sleeps":**
- If nobody uses it for 15 minutes, it goes to sleep
- First person to access it wakes it up (takes ~30 seconds)
- It's free, so this is normal!

---

# 📊 Comparison Table

| Feature | Codespaces | Single HTML | Render.com |
|---------|-----------|-------------|-----------|
| **Speed** | ⚡ Fast | 🐌 Slow | ⚡ Fast |
| **Works Offline** | ❌ No | ✅ Yes (USB) | ❌ No |
| **Always Online** | ❌ Only when running | ❌ Only when browser open | ✅ Yes |
| **Setup Time** | 2 min | 1 min | 5 min |
| **Can Share** | ❌ No | ✅ Yes | ✅ Yes |
| **URL Rewriting** | ✅ Full | ⚠️ Partial | ✅ Full |
| **Cost** | Free | Free | Free |
| **Best For** | Testing | Portability | Production |

---

# 🔄 Workflow Examples

## Example 1: I Want to Test Locally

```bash
# In terminal:
npm start

# Then:
# 1. Open http://localhost:3000
# 2. Test the proxy
# 3. Make changes if needed
# 4. Press Ctrl+C to stop
```

## Example 2: I Want USB Portability

```
1. Copy index.html to USB drive
2. Unplug USB
3. Use on any computer
4. Double-click to run
```

## Example 3: I Want 24/7 Access

```
1. Push code to GitHub (git push)
2. Sign up on Render.com
3. Deploy (takes 3 min)
4. Get permanent link
5. Share with anyone!
```

## Example 4: I Want Both USB + Cloud

```
1. Copy index.html to USB (PATH 2A)
2. Deploy on Render (PATH 3)
3. Now you have:
   - USB: Works anywhere, no internet needed*
   - Render: Always online link
   - GitHub Pages: Free simple hosting
```

*\*USB version still needs internet for actual site fetching*

---

# 🛠️ Editing & Updating

## If You Edit `server.js` (Backend)
1. Save the file
2. Stop server: `Ctrl+C`
3. Start again: `npm start`
4. Changes take effect!

## If You Edit `public/index.html` (Frontend UI)
1. Save the file
2. Refresh browser (F5)
3. Changes appear instantly!

## If You Edit `index.html` (Single-file version)
1. Save the file
2. If on Codespaces:
   ```bash
   git add index.html
   git commit -m "Update single-file version"
   git push
   ```
3. Changes live on GitHub Pages within seconds!

---

# 💡 Pro Tips

### Tip 1: Use the Terminal Shortcut
- Ctrl + ` (backtick) = Open/close terminal

### Tip 2: Multiple Terminals
- Click `+` next to terminal tab to open another
- Run server in one, use other for git commands

### Tip 3: Preview Mode
- Right-click `index.html`
- Select "Open with Live Server"
- Gets auto-refresh as you edit

### Tip 4: Keep Session Alive
- Render.com: Upgrade to paid tier to avoid sleep
- Codespaces: Server stops when you close tab (restart with `npm start`)

---

# ❓ FAQ

**Q: Can I use this on a school Chromebook?**
A: Check with your school first! It may violate acceptable use policies.

**Q: Will YouTube/Netflix work?**
A: Usually not. They have strong anti-proxy measures.

**Q: Can I make money with this?**
A: No, this is educational only. Don't use for paid services.

**Q: Which option is best?**
A: 
- Testing? Use Codespaces
- Portability? Use USB
- Sharing? Use GitHub Pages or Render

**Q: How do I stop it?**
A: Press `Ctrl+C` in the terminal

---

# 🎓 What You Learned

By using this project, you learned:

✅ How web proxies work
✅ How to use Node.js servers
✅ How to deploy to the cloud
✅ How to handle security headers
✅ How URL rewriting works
✅ How to use GitHub for version control
✅ How to use GitHub Pages & Render for hosting

**Congratulations! You're a web developer!** 🎉

---

**Questions? Check README.md for more details!**
