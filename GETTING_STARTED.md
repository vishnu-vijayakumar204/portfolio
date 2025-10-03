# Getting Started 🚀

Welcome! This guide will help you set up and run your portfolio website.

## Step 1: Install Dependencies

Open Terminal and navigate to your project folder:

```bash
cd /Users/vishnu.vijayakumar/Desktop/Vishnu/portfolio
```

Install all required packages:

```bash
npm install
```

This will install:

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

**Wait time**: 2-3 minutes depending on your internet speed.

## Step 2: Run the Development Server

Start the local development server:

```bash
npm run dev
```

You should see output like:

```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- Ready in 2.5s
```

## Step 3: View Your Portfolio

Open your browser and go to:

```
http://localhost:3000
```

You should see your portfolio with all sections!

## Step 4: Customize Your Content

Now it's time to add your personal information. Follow the **CUSTOMIZATION_GUIDE.md** for detailed instructions.

### Quick Customization Checklist:

1. **Update Personal Info** (`src/components/Hero.tsx`)

   - Your name
   - Professional title
   - Email, GitHub, LinkedIn links

2. **Update About** (`src/components/About.tsx`)

   - Your bio/story
   - Statistics

3. **Add Experience** (`src/components/Experience.tsx`)

   - Replace example jobs with your actual experience

4. **Add Projects** (`src/components/Projects.tsx`)

   - Replace example projects with your freelance work
   - Add project images

5. **Update Skills** (`src/components/Skills.tsx`)

   - Add your actual skills and proficiency levels

6. **Update Contact** (`src/components/Contact.tsx`)
   - Your email, phone, location

## Step 5: Test Everything

As you make changes:

- The browser will automatically reload (hot reload)
- Check each section works properly
- Test on mobile view (DevTools → Toggle Device Toolbar)

## Step 6: Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build.

If build is successful, you're ready to deploy!

## Step 7: Deploy to Vercel

Follow the **DEPLOYMENT.md** guide for step-by-step deployment instructions.

### Quick Deploy:

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Import your repository
5. Click Deploy
6. Done! 🎉

## Common Issues & Solutions

### Issue: `npm install` fails

**Solution**:

```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

### Issue: Port 3000 already in use

**Solution**:

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Issue: Module not found errors

**Solution**:

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Changes not showing

**Solution**:

- Hard refresh: Cmd + Shift + R (Mac) or Ctrl + Shift + R (Windows)
- Clear browser cache
- Restart dev server

### Issue: TypeScript errors

**Solution**:

```bash
# Install type definitions
npm install --save-dev @types/react @types/node
```

## Project Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run linter
npm run lint
```

## File Structure Overview

```
portfolio/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Main layout (update metadata here)
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   └── components/            # React components
│       ├── Navbar.tsx         # Navigation
│       ├── Hero.tsx           # Hero section (UPDATE THIS)
│       ├── About.tsx          # About section (UPDATE THIS)
│       ├── Experience.tsx     # Experience (UPDATE THIS)
│       ├── Projects.tsx       # Projects (UPDATE THIS)
│       ├── Skills.tsx         # Skills (UPDATE THIS)
│       ├── Contact.tsx        # Contact (UPDATE THIS)
│       └── Footer.tsx         # Footer (UPDATE THIS)
├── public/                    # Static files (images, etc.)
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## What to Update (Priority Order)

### High Priority (Do First):

1. ✅ Hero section - Your name, title, links
2. ✅ Projects - Your freelance work
3. ✅ Experience - Your work history
4. ✅ Contact - Your email, phone

### Medium Priority:

5. ✅ About section - Your story
6. ✅ Skills - Your technologies
7. ✅ Footer - Social links

### Low Priority (Optional):

8. ⭕ Colors/theme customization
9. ⭕ Add blog section
10. ⭕ Add testimonials

## Next Steps

1. ✅ Install dependencies (`npm install`)
2. ✅ Run dev server (`npm run dev`)
3. ✅ Customize content (see CUSTOMIZATION_GUIDE.md)
4. ✅ Test everything
5. ✅ Build (`npm run build`)
6. ✅ Deploy to Vercel (see DEPLOYMENT.md)
7. ✅ Share your portfolio! 🎉

## Resources

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS Docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion Docs**: [framer.com/motion](https://www.framer.com/motion/)
- **Lucide Icons**: [lucide.dev](https://lucide.dev)

## Need Help?

1. Check the other guide files:

   - `CUSTOMIZATION_GUIDE.md` - How to update content
   - `DEPLOYMENT.md` - How to deploy
   - `README.md` - General information

2. Common questions:

   - "How do I change colors?" → See CUSTOMIZATION_GUIDE.md section 9
   - "How do I add images?" → See CUSTOMIZATION_GUIDE.md section 4
   - "How do I deploy?" → See DEPLOYMENT.md

3. Debug tips:
   - Check terminal for error messages
   - Check browser console (F12) for errors
   - Google the error message
   - Ask ChatGPT or Claude for help

---

## 🎉 You're Ready!

Start the dev server and begin customizing your portfolio. Good luck!

```bash
npm run dev
```

Then open: http://localhost:3000

---

**Pro Tip**: Make small changes and test frequently. Commit your changes to git regularly!

```bash
git add .
git commit -m "Updated hero section with my info"
```
