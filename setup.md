# Portfolio Website Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000`

## Customization Checklist

### Personal Information
- [ ] Update name in `src/components/Hero.js`
- [ ] Update profession in `src/components/Hero.js`
- [ ] Update social links in `src/components/Hero.js`
- [ ] Update personal info in `src/components/About.js`
- [ ] Update timeline in `src/components/About.js`
- [ ] Update projects in `src/components/Projects.js`
- [ ] Update skills in `src/components/Skills.js`
- [ ] Update resume info in `src/components/Resume.js`
- [ ] Update contact info in `src/components/Contact.js`

### Styling
- [ ] Update colors in `tailwind.config.js`
- [ ] Update fonts in `tailwind.config.js`
- [ ] Customize global styles in `src/index.css`

### Content
- [ ] Replace placeholder images with actual project screenshots
- [ ] Update project links to actual repositories
- [ ] Update social media links
- [ ] Add actual resume PDF
- [ ] Update contact information

### SEO
- [ ] Update meta tags in `public/index.html`
- [ ] Update title and description
- [ ] Add favicon and app icons

## Features Included

✅ Modern React.js with Hooks
✅ Tailwind CSS for styling
✅ Framer Motion animations
✅ Dark/Light mode toggle
✅ Responsive design
✅ Smooth scrolling navigation
✅ Contact form
✅ Project showcase
✅ Skills section with progress bars
✅ Timeline component
✅ Social media integration
✅ SEO optimized
✅ PWA ready

## File Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation with dark mode toggle
│   ├── Hero.js         # Hero section with intro
│   ├── About.js        # About section with timeline
│   ├── Projects.js     # Projects showcase
│   ├── Skills.js       # Skills with progress bars
│   ├── Resume.js       # Resume/experience section
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer with social links
├── App.js              # Main App component
├── index.js            # React entry point
└── index.css           # Global styles and Tailwind
```

## Deployment

### Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### Vercel
1. Push code to GitHub
2. Import project to Vercel
3. Deploy automatically

### GitHub Pages
1. Add `homepage` to `package.json`
2. Install `gh-pages`: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`
4. Run `npm run deploy`

## Support

For issues or questions, please check the README.md file or create an issue on GitHub.
