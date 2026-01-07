# Justus Faby - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing full-stack development expertise, projects, experience, and technical skills.

## Live Demo

[View Live Portfolio](#) - Add your deployment URL here

## Features

- **Modern Dark Theme** - Sleek, professional design with blue and purple accent colors
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices
- **Smooth Navigation** - Tab-based section navigation with smooth transitions
- **Project Showcase** - Display your 3 major projects with technology tags and links
- **Experience Timeline** - Highlight your professional journey and internships
- **Skills Grid** - Organized skills by category (Frontend, Backend, Tools, Cloud)
- **Contact Links** - Easy access to email, GitHub, and LinkedIn profiles
- **Performance Optimized** - Built with Next.js for fast loading and SEO optimization

## Tech Stack

- **Framework**: [Next.js 13+](https://nextjs.org/) - React framework with App Router
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - High-quality React components
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) - Real-time performance tracking
- **Font**: [Geist](https://vercel.com/font) - Modern typeface by Vercel

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx           # Root layout with metadata and fonts
│   ├── page.tsx             # Main portfolio page with all sections
│   └── globals.css          # Global styles and design tokens
├── components/
│   └── ui/                  # shadcn/ui components
├── README.md                # This file
└── package.json             # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd resume-to-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Customization Guide

### Update Personal Information

Edit `app/page.tsx` to update:
- Name and title in the header
- Bio and description in the About section
- Contact email and phone in the footer
- GitHub and LinkedIn links in the footer

### Add or Update Projects

Modify the `projects` array in `app/page.tsx`:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Brief description of what your project does",
    tech: ["React", "Node.js", "MongoDB"], // Update technologies used
    link: "https://your-project-link.com",
  },
  // Add more projects here
]
```

### Update Work Experience

Edit the `experience` array in `app/page.tsx`:

```typescript
const experience = [
  {
    role: "Your Job Title",
    company: "Company Name",
    period: "Month Year – Month Year",
    description: "Description of your responsibilities and achievements",
  },
  // Add more experiences here
]
```

### Modify Skills

Update the `skills` object in `app/page.tsx` to categorize your technical proficiencies:

```typescript
const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "MongoDB", "Firebase"],
  // Add or modify categories as needed
}
```

### Customize Colors and Styling

Edit `app/globals.css` to change the color scheme. The current design uses:

- **Primary**: Blue (`oklch(0.55 0.2 250)`)
- **Secondary**: Purple (`oklch(0.65 0.15 280)`)
- **Background**: Nearly black (`oklch(0.08 0 0)`)
- **Text**: Off-white (`oklch(0.95 0 0)`)

Update the `--primary`, `--secondary`, and other color variables to match your brand.

## Sections

### About
Introduction and headline showcasing your expertise as a full-stack developer.

### Experience
Timeline of internships and professional roles with company names, dates, and descriptions.

### Projects
Featured projects with technology tags, descriptions, and links to live demos or repositories.

### Skills
Categorized technical skills organized by Frontend, Backend, Tools, and Cloud technologies.

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will auto-detect Next.js and configure everything
4. Your site goes live automatically on every push

### Deploy to Other Platforms

- **Netlify**: Push to Git and auto-deploy
- **AWS Amplify**: Connect your GitHub repository
- **DigitalOcean**: Use App Platform for easy deployment

## SEO and Metadata

The portfolio includes SEO optimizations:

- Metadata title and description in `app/layout.tsx`
- Open Graph tags for social sharing (add as needed)
- Mobile-friendly viewport settings
- Fast loading times for better SEO scores

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Compress images used in projects
2. **Cache Assets**: Vercel automatically caches static assets
3. **Monitor Analytics**: Use Vercel Analytics to track page performance
4. **Lazy Load**: Consider adding image lazy loading for heavy content

## Contributing

This is your personal portfolio. Feel free to:
- Add new sections
- Experiment with different color schemes
- Add interactive features
- Optimize performance

## License

This portfolio template is free to use and modify for your personal portfolio.

## Contact

- Email: [justusfaby@gmail.com](mailto:justusfaby@gmail.com)
- Phone: +91 88700 99067
- GitHub: [Add your GitHub URL](#)
- LinkedIn: [Add your LinkedIn URL](#)

## Next Steps

1. Update all personal information and links
2. Replace placeholder project links with your actual projects
3. Add high-quality descriptions for each project
4. Deploy to Vercel for free hosting
5. Share your portfolio with recruiters and collaborators!

---

**Built with ❤️ using Next.js and Tailwind CSS**
