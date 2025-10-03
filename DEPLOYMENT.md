# Deployment Guide 🚀

This guide will walk you through deploying your portfolio to Vercel for **FREE**.

## Prerequisites

- Your portfolio code pushed to GitHub
- A GitHub account
- That's it! No credit card needed.

## Step-by-Step Deployment

### 1. Push Your Code to GitHub

If you haven't already, push your code to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial portfolio setup"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Via Vercel Website (Recommended for Beginners)

1. **Go to [Vercel](https://vercel.com)**

2. **Sign Up / Log In**

   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub

3. **Import Your Project**

   - Click "Add New..." → "Project"
   - Find your `portfolio` repository
   - Click "Import"

4. **Configure Project**

   - **Project Name**: Keep it as `portfolio` or customize
   - **Framework Preset**: Should auto-detect "Next.js" ✓
   - **Root Directory**: Leave as `./`
   - **Build Command**: Leave as default
   - **Output Directory**: Leave as default
   - **Environment Variables**: None needed for now

5. **Deploy**

   - Click "Deploy"
   - Wait 1-2 minutes for deployment to complete
   - You'll get a URL like: `https://portfolio-xyz123.vercel.app`

6. **🎉 Done!**
   - Click "Visit" to see your live portfolio
   - Share the link with anyone!

#### Option B: Via Vercel CLI (For Advanced Users)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from your project directory)
cd /Users/vishnu.vijayakumar/Desktop/Vishnu/portfolio
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (Your account)
# - Link to existing project? No
# - What's your project's name? portfolio
# - In which directory is your code? ./
# - Want to modify settings? No

# Deploy to production
vercel --prod
```

## Automatic Deployments

Once connected to Vercel:

- **Every push to `main` branch** → Automatically deploys to production
- **Every push to other branches** → Creates preview deployments
- **Every pull request** → Creates preview deployments

No manual work needed!

## Custom Domain (Optional)

### Free Options:

1. Use Vercel's domain: `your-portfolio.vercel.app` (already provided)
2. Free subdomains from Freenom (.tk, .ml, .ga domains)

### Paid Domain ($10-15/year):

Buy from: Namecheap, GoDaddy, Google Domains 

### Adding Custom Domain to Vercel: 

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Enter your domain name
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5 mins - 48 hours)

## Environment Variables (If Needed Later)

When you add features that need API keys:

1. In Vercel dashboard → Your Project → Settings → Environment Variables
2. Add variables (e.g., `NEXT_PUBLIC_EMAILJS_KEY`)
3. Redeploy for changes to take effect

## Monitoring & Analytics

Vercel provides free:

- **Analytics**: Traffic and performance metrics
- **Speed Insights**: Core Web Vitals
- **Log Streams**: Real-time logs

Access from your Vercel dashboard.

## Alternative Free Hosting Options

### Netlify

- Very similar to Vercel
- Great for static sites
- Free tier includes: 100GB bandwidth, 300 build minutes/month
- Deploy: [netlify.com](https://netlify.com)

**Steps:**

1. Sign up with GitHub
2. Click "New site from Git"
3. Select your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy!

### GitHub Pages

- **Pros**: Free, integrated with GitHub
- **Cons**: Static only, requires extra setup for Next.js
- Not recommended for this Next.js project

### Cloudflare Pages

- Free hosting with CDN
- Similar to Vercel/Netlify
- Deploy: [pages.cloudflare.com](https://pages.cloudflare.com)

### Railway

- Free tier: 500 hours/month
- Good for full-stack apps with backend
- Deploy: [railway.app](https://railway.app)

## Comparison Table

| Platform             | Best For        | Free Tier      | Custom Domain | Auto Deploy |
| -------------------- | --------------- | -------------- | ------------- | ----------- |
| **Vercel**           | Next.js apps    | Yes, unlimited | Yes           | Yes         |
| **Netlify**          | Static sites    | 100GB/month    | Yes           | Yes         |
| **GitHub Pages**     | Static sites    | Unlimited      | Yes           | Yes         |
| **Cloudflare Pages** | Static sites    | Unlimited      | Yes           | Yes         |
| **Railway**          | Full-stack apps | 500hrs/month   | Yes           | Yes         |

## Recommended Choice: Vercel

**Why Vercel?**

- ✅ Built by Next.js creators
- ✅ Zero configuration needed
- ✅ Best performance for Next.js
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Unlimited bandwidth
- ✅ Free forever for personal projects
- ✅ Built-in analytics
- ✅ Instant rollbacks

## Troubleshooting

### Build Failed?

- Check build logs in Vercel dashboard
- Make sure `package.json` has correct scripts
- Verify all dependencies are in `package.json`
- Run `npm run build` locally to test

### Site Not Loading?

- Wait a few minutes for deployment
- Clear browser cache
- Check Vercel dashboard for deployment status

### Images Not Showing?

- Make sure images are in `/public` folder
- Use correct paths: `/images/photo.jpg`
- For external images, add domains to `next.config.js`

### Need Help?

- Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Discord community: [vercel.com/discord](https://vercel.com/discord)

## Post-Deployment Checklist

- [ ] Visit your live site
- [ ] Test all sections and links
- [ ] Check mobile responsiveness
- [ ] Test contact form
- [ ] Share your portfolio URL!
- [ ] Add URL to your GitHub profile
- [ ] Add URL to LinkedIn profile
- [ ] Add URL to resume

## Updating Your Portfolio

After deployment, to update your portfolio:

```bash
# Make your changes
git add .
git commit -m "Update projects section"
git push

# Vercel automatically deploys! 🚀
```

---

## 🎉 Congratulations!

Your portfolio is now live and accessible to the world!

Share it with:

- Potential clients
- Employers
- Friends and colleagues
- On social media
- In job applications

**Your Portfolio URL**: `https://your-portfolio.vercel.app`

---

Need help? Check the README.md or reach out!
