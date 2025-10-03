# Customization Guide 🎨

This guide will help you customize your portfolio with your own information, projects, and experience.

## Quick Start Checklist

- [ ] Update personal information in Hero section
- [ ] Add your bio in About section
- [ ] Add your work experience
- [ ] Add your projects
- [ ] Update skills
- [ ] Update contact information
- [ ] Replace placeholder images
- [ ] Update social media links
- [ ] Customize colors (optional)

## 1. Hero Section

**File**: `src/components/Hero.tsx`

### Update Your Name and Title

```typescript
// Line 26-29
<h1>
  Hi, I'm <span className="text-gradient">Your Name</span>
</h1>

// Line 38
<p>
  Your Professional Title & Description
</p>
```

### Update Social Links

```typescript
// Lines 77-100
<a href="https://github.com/YOUR_GITHUB_USERNAME">
<a href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME">
<a href="mailto:YOUR_EMAIL@example.com">
```

## 2. About Section

**File**: `src/components/About.tsx`

### Update Your Bio

```typescript
// Lines 51-67 - Replace the three paragraphs with your story
<p>
  Your introduction paragraph...
</p>
<p>
  Your journey paragraph...
</p>
<p>
  Your interests paragraph...
</p>
```

### Update Statistics

```typescript
// Lines 75-94 - Update these numbers
<div className="text-4xl font-bold text-gradient mb-2">50+</div>
<div className="text-slate-400">Projects Completed</div>

<div className="text-4xl font-bold text-gradient mb-2">30+</div>
<div className="text-slate-400">Happy Clients</div>

<div className="text-4xl font-bold text-gradient mb-2">5+</div>
<div className="text-slate-400">Years Experience</div>

<div className="text-4xl font-bold text-gradient mb-2">100%</div>
<div className="text-slate-400">Client Satisfaction</div>
```

## 3. Experience Section

**File**: `src/components/Experience.tsx`

### Add Your Work Experience

Replace the entire `experiences` array (lines 8-56) with your actual experience:

```typescript
const experiences = [
  {
    role: "Your Job Title",
    company: "Company Name",
    period: "Jan 2023 - Present",
    description: "Brief description of your role and responsibilities.",
    achievements: [
      "Achievement 1 with metrics",
      "Achievement 2 with impact",
      "Achievement 3 with results",
    ],
    technologies: ["React", "Node.js", "AWS", "etc"],
  },
  // Add more experiences...
];
```

### Tips:

- List most recent experience first
- Use action verbs (Led, Built, Implemented, Increased)
- Include metrics and numbers where possible
- Keep descriptions concise (2-3 sentences)
- List 3-5 key achievements per role

## 4. Projects Section

**File**: `src/components/Projects.tsx`

### Add Your Projects

Replace the entire `projects` array (lines 8-93) with your actual projects:

```typescript
const projects = [
  {
    title: "Project Name",
    description:
      "Brief description of what the project does and the problem it solves.",
    image: "https://your-image-url.com/image.jpg", // or "/images/project1.jpg"
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-project-live-url.com",
    githubUrl: "https://github.com/yourusername/project-repo",
    highlights: [
      "Key metric or feature 1",
      "Key metric or feature 2",
      "Key metric or feature 3",
    ],
  },
  // Add more projects...
];
```

### Project Images:

**Option 1: Use Your Own Images**

1. Add images to `/public/images/` folder
2. Reference them: `image: "/images/my-project.jpg"`

**Option 2: Use URLs**

- Use images from your deployed projects
- Use placeholder images from Unsplash

**Option 3: Use Screenshots**

1. Take screenshots of your projects
2. Optimize them (max 1MB, 1200x800px recommended)
3. Save in `/public/images/`

### Tips:

- Showcase 4-6 of your best projects
- Include live demo links when possible
- Add GitHub links for open-source projects
- Use high-quality images
- Highlight measurable results

## 5. Skills Section

**File**: `src/components/Skills.tsx`

### Update Your Skills

Replace the `skillCategories` array (lines 8-44) with your actual skills:

```typescript
const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 }, // 0-100
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      // Add your frontend skills...
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 75 },
      // Add your backend skills...
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 70 },
      // Add your tools...
    ],
  },
];
```

### Update Additional Skills

```typescript
// Lines 117-128 - Update this array
{[
  "Your Skill 1",
  "Your Skill 2",
  "Your Methodology",
  // etc...
].map((skill, index) => (...))}
```

### Tips:

- Be honest with skill levels
- 90-100: Expert level
- 70-89: Advanced/Proficient
- 50-69: Intermediate
- Below 50: Beginner (consider removing)

## 6. Contact Section

**File**: `src/components/Contact.tsx`

### Update Contact Information

```typescript
// Line 87 - Email
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>

// Line 102 - Phone
<a href="tel:+1234567890">
  +1 (234) 567-890
</a>

// Line 117 - Location
<p className="text-slate-400">Your City, Your Country</p>
```

### Setup Contact Form

The form currently shows an alert. To make it functional:

#### Option 1: EmailJS (Easiest)

```bash
npm install @emailjs/browser
```

Then update the `handleSubmit` function:

```typescript
import emailjs from "@emailjs/browser";

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    })
    .catch(() => {
      alert("Failed to send message. Please try again.");
    });
};
```

#### Option 2: Create API Route

Create `src/app/api/contact/route.ts`:

```typescript
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // Send email using SendGrid, Resend, or Nodemailer
  // ... your email logic here

  return NextResponse.json({ success: true });
}
```

## 7. Footer

**File**: `src/components/Footer.tsx`

### Update Social Links

```typescript
// Lines 18-41 - Update all URLs
<a href="https://github.com/YOUR_USERNAME">
<a href="https://linkedin.com/in/YOUR_USERNAME">
<a href="https://twitter.com/YOUR_USERNAME">
<a href="mailto:YOUR_EMAIL">
```

## 8. Metadata & SEO

**File**: `src/app/layout.tsx`

### Update Page Metadata

```typescript
// Lines 9-18
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your professional description highlighting your expertise",
  keywords: ["your", "skills", "keywords"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Portfolio",
    description: "Your description",
    type: "website",
  },
};
```

## 9. Color Customization (Optional)

**File**: `tailwind.config.ts`

### Change Accent Colors

To change from purple/pink to other colors:

```typescript
// Replace purple-* and pink-* throughout the codebase
// Common alternatives:
// - Blue/Cyan: from-blue-500 to-cyan-500
// - Green/Emerald: from-green-500 to-emerald-500
// - Orange/Red: from-orange-500 to-red-500
// - Indigo/Purple: from-indigo-500 to-purple-500
```

**File**: `src/app/globals.css`

Update gradient:

```css
.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-YOUR-COLOR-400 via-YOUR-COLOR-400 to-YOUR-COLOR-400;
}
```

## 10. Logo/Brand

**File**: `src/components/Navbar.tsx`

### Update Logo

```typescript
// Line 44 - Replace "VV" with your initials or brand
<motion.a href="#home" className="text-2xl font-bold text-gradient">
  YI {/* Your Initials */}
</motion.a>
```

**File**: `src/components/Footer.tsx`

```typescript
// Line 13 - Update footer brand
<h3 className="text-2xl font-bold text-gradient mb-2">YI</h3>
```

## Testing Your Changes

After customization:

1. **Run locally**:

   ```bash
   npm run dev
   ```

2. **Test all sections**:

   - Navigation works
   - All links open correctly
   - Images load properly
   - Contact form works
   - Mobile responsive

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Check for errors**:
   - Fix any TypeScript errors
   - Fix any build warnings

## Final Touches

### Add Favicon

1. Generate favicon from your logo: [favicon.io](https://favicon.io)
2. Add to `/public/` folder
3. Update `src/app/layout.tsx` with favicon link

### Add Resume Download

In Hero or Contact section:

```typescript
<a
  href="/resume.pdf"
  download
  className="px-8 py-4 rounded-full glass hover-glow"
>
  Download Resume
</a>
```

### Add Google Analytics (Optional)

1. Get tracking ID from Google Analytics
2. Add script to `src/app/layout.tsx`

## Common Issues

**Images not showing?**

- Make sure they're in `/public/` folder
- Use absolute paths: `/images/photo.jpg`

**TypeScript errors?**

- Install types: `npm install --save-dev @types/node`
- Check all imports

**Build fails?**

- Run `npm install` again
- Delete `.next` folder and rebuild

---

## Need Help?

If you're stuck on any customization:

1. Check the comments in the code
2. Refer to the README.md
3. Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
4. Ask for help!

---

Good luck with your portfolio! 🚀
