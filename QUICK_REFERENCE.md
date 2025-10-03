# Quick Reference Card 🎯

One-page guide with everything you need!

## 🚀 Commands

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Check for errors
npm run lint
```

## 📂 Files to Edit

| File                            | What to Update            |
| ------------------------------- | ------------------------- |
| `src/components/Hero.tsx`       | Name, title, social links |
| `src/components/About.tsx`      | Bio, statistics           |
| `src/components/Experience.tsx` | Work history              |
| `src/components/Projects.tsx`   | Your projects             |
| `src/components/Skills.tsx`     | Your skills               |
| `src/components/Contact.tsx`    | Email, phone, location    |
| `src/components/Footer.tsx`     | Social links              |
| `src/app/layout.tsx`            | Page title, description   |

## 🔗 URLs to Update

Search for these placeholder URLs and replace with your own:

- `https://github.com/yourusername` → Your GitHub
- `https://linkedin.com/in/yourusername` → Your LinkedIn
- `https://twitter.com/yourusername` → Your Twitter
- `your.email@example.com` → Your email
- `+1 (234) 567-890` → Your phone
- Project URLs → Your live projects

## 🖼️ Adding Images

1. Save images to: `/public/images/`
2. Reference in code: `image: "/images/project1.jpg"`
3. Optimize: Max 1MB, 1200x800px recommended

## 🎨 Color Scheme

Current: Purple/Pink gradients

To change, replace in all components:

- `from-purple-500 to-pink-500`
- `from-purple-400 to-pink-400`

Popular alternatives:

- Blue/Cyan: `from-blue-500 to-cyan-500`
- Green: `from-green-500 to-emerald-500`
- Orange/Red: `from-orange-500 to-red-500`

## 🚀 Deploy to Vercel

1. Push to GitHub:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Import your repository
5. Click "Deploy"
6. Done! ✨

## 📱 Test Checklist

- [ ] Run locally: `npm run dev`
- [ ] All sections load correctly
- [ ] All links work
- [ ] Images show properly
- [ ] Test mobile view (DevTools)
- [ ] Build succeeds: `npm run build`
- [ ] Deploy to Vercel

## 🆘 Common Issues

**Port in use?**

```bash
lsof -ti:3000 | xargs kill -9
```

**Module errors?**

```bash
rm -rf node_modules package-lock.json
npm install
```

**Changes not showing?**

- Hard refresh: Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)

## 📚 Full Documentation

- **Setup**: See `GETTING_STARTED.md`
- **Customization**: See `CUSTOMIZATION_GUIDE.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Overview**: See `PROJECT_SUMMARY.md`

## 🎯 Priority Tasks

### High Priority:

1. ✅ Install: `npm install`
2. ✅ Run: `npm run dev`
3. ✅ Update Hero section (name, links)
4. ✅ Add projects
5. ✅ Add experience

### Medium Priority:

6. ✅ Update About
7. ✅ Update Skills
8. ✅ Add images

### Deploy:

9. ✅ Build: `npm run build`
10. ✅ Deploy to Vercel

## 💡 Tips

- Save often, commit frequently
- Test in mobile view
- Keep images optimized
- Update content regularly
- Check for typos

## 📞 Need Help?

1. Check the documentation files
2. Google the error
3. Ask ChatGPT/Claude
4. Check Next.js docs

---

**Start here**: `npm install && npm run dev`

Then open: http://localhost:3000

Good luck! 🚀
