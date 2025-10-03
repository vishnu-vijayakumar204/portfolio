# Portfolio Website 🚀

A stunning, modern portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

> **Status**: ✅ Ready to customize and deploy!

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Features

- **Modern Design**: Sleek glassmorphism UI with gradient accents
- **Fully Responsive**: Works seamlessly on all devices
- **Smooth Animations**: Framer Motion powered animations
- **SEO Optimized**: Built-in SEO best practices
- **Performance**: Optimized for speed and performance
- **TypeScript**: Type-safe code
- **Dark Theme**: Beautiful dark mode design

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):

   - Update your name, title, and description
   - Add your social media links (GitHub, LinkedIn, Email)

2. **About Section** (`src/components/About.tsx`):

   - Update your bio and story
   - Modify statistics (projects completed, clients, experience)

3. **Experience Section** (`src/components/Experience.tsx`):

   - Add your work experience in the `experiences` array
   - Include role, company, period, description, achievements, and technologies

4. **Projects Section** (`src/components/Projects.tsx`):

   - Add your projects in the `projects` array
   - Include title, description, image, technologies, live URL, and GitHub URL
   - Replace placeholder images with your actual project screenshots

5. **Skills Section** (`src/components/Skills.tsx`):

   - Update the `skillCategories` array with your skills
   - Adjust skill levels (0-100)

6. **Contact Section** (`src/components/Contact.tsx`):

   - Update email, phone, and location
   - Implement form submission (EmailJS, Netlify Forms, or custom API)

7. **Footer** (`src/components/Footer.tsx`):

   - Update social media links

8. **Metadata** (`src/app/layout.tsx`):
   - Update title, description, and other SEO metadata

## 🚀 Deployment to Vercel (Free)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push code to GitHub**:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Go to [Vercel](https://vercel.com)**:
   - Sign up with your GitHub account
   - Click "Add New Project"
   - Import your portfolio repository
   - Click "Deploy"

That's it! Vercel will automatically detect Next.js and deploy your site.

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:

   ```bash
   vercel login
   ```

3. **Deploy**:

   ```bash
   vercel
   ```

4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

## 🌐 Custom Domain

1. In Vercel dashboard, go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## 📧 Contact Form Setup

The contact form currently shows an alert. To make it functional:

### Option 1: EmailJS (Free)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Install EmailJS: `npm install @emailjs/browser`
4. Update `src/components/Contact.tsx` with EmailJS integration

### Option 2: Netlify Forms

1. Deploy to Netlify instead of Vercel
2. Add `netlify` attribute to the form
3. Netlify will automatically handle form submissions

### Option 3: Custom API

1. Create API route: `src/app/api/contact/route.ts`
2. Use services like SendGrid, Resend, or Nodemailer
3. Update form to POST to your API endpoint

## 🖼️ Images

Replace placeholder images in the Projects section with your actual project screenshots. You can:

- Use images from Unsplash (for demo purposes)
- Upload your own images to `/public/images/`
- Use a CDN or image hosting service

## 🔧 Build for Production

```bash
npm run build
npm start
```

## 📝 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Navbar.tsx       # Navigation bar
│       ├── Hero.tsx         # Hero section
│       ├── About.tsx        # About section
│       ├── Experience.tsx   # Experience section
│       ├── Projects.tsx     # Projects section
│       ├── Skills.tsx       # Skills section
│       ├── Contact.tsx      # Contact section
│       └── Footer.tsx       # Footer
├── public/                  # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 📚 Documentation

This project includes comprehensive documentation:

- **[GETTING_STARTED.md](GETTING_STARTED.md)** - Installation and setup guide
- **[CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)** - How to customize your content
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Step-by-step deployment guide
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Complete project overview
- **[CONTENT_CHECKLIST.md](CONTENT_CHECKLIST.md)** - Track your customization progress
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Quick reference card

## 🎯 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
# Visit http://localhost:3000
```

Then follow **[GETTING_STARTED.md](GETTING_STARTED.md)** for detailed instructions.

## 📋 Customization TODO

- [ ] Update personal information (Hero section)
- [ ] Add your work experience
- [ ] Add your freelance projects
- [ ] Add project screenshots
- [ ] Update skills and technologies
- [ ] Update contact information
- [ ] Test on multiple devices
- [ ] Deploy to Vercel

See **[CONTENT_CHECKLIST.md](CONTENT_CHECKLIST.md)** for a detailed checklist.

## 📄 License

This project is open source and available for personal use.

## 🤝 Support

If you need help with deployment or customization, feel free to reach out!

---

Built with ❤️ using Next.js
