# Gentle Group - Landing Page

A modern, animated landing page for Gentle Group built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with stunning animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **Smooth Animations**: Beautiful animations using Framer Motion
- **SEO Ready**: Optimized for search engines
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework

## 🎨 Sections

1. **Hero Section** - Eye-catching hero with animated background and CTAs
2. **Services** - Showcase of all services with hover effects
3. **Work** - Portfolio of projects with detailed cards
4. **Team** - Team member profiles with social links
5. **Reviews** - Client testimonials and ratings
6. **FAQ** - Accordion-style frequently asked questions
7. **Footer** - Contact information and navigation

## 🛠️ Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 🎨 Brand Colors

- **Aquamarine Green**: `#01FFA9`
- **Tropical Indigo**: `#A97AFF`
- **Oxford Blue**: `#010A30`
- **Ghost White**: `#F0EFF4`

## 📁 Project Structure

```
gentle-Group/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Work.tsx
│   ├── Team.tsx
│   ├── Reviews.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── public/
│   └── logo.png
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `.next`, `public`, and necessary config files to your server
3. Run `npm start` on your server

## 📝 Customization

### Update Content

1. **Services**: Edit `components/Services.tsx` - Update the `services` array
2. **Projects**: Edit `components/Work.tsx` - Update the `projects` array
3. **Team**: Edit `components/Team.tsx` - Update the `team` array
4. **Reviews**: Edit `components/Reviews.tsx` - Update the `reviews` array
5. **FAQ**: Edit `components/FAQ.tsx` - Update the `faqs` array

### Update Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'aquamarine': '#01FFA9',
  'tropical-indigo': '#A97AFF',
  'oxford-blue': '#010A30',
  'ghost-white': '#F0EFF4',
}
```

### Update Contact Information

Edit `components/Footer.tsx` to update:
- Email address
- Phone number
- Location
- Social media links

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://gentle-Group.com
NEXT_PUBLIC_CONTACT_EMAIL=info@gentle-Group.com
```

## 📄 License

© 2024 Gentle Group. All rights reserved.

## 🤝 Support

For support, email info@gentle-Group.com or visit our website.

## ✨ Special Features

- **Smooth Scroll**: Native smooth scrolling between sections
- **Interactive Animations**: Hover effects and scroll-triggered animations
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Performance**: Optimized images and lazy loading
- **Accessibility**: ARIA labels and semantic HTML
- **SEO Optimized**: Meta tags and structured data

---

Built with ❤️ by Gentle Group
