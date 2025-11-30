# Coretech - Telecommunications & ICT Solutions

A modern, responsive website for Coretech, a leading telecommunications and ICT solutions provider in Palestine.

## 🌟 Features

- **Modern Design**: Sleek, professional design with Coretech brand colors and typography
- **Fully Responsive**: Mobile-first approach with responsive breakpoints for all devices
- **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- **Bilingual Support**: Full Arabic and English language support with RTL layout
- **Animated UI**: Smooth animations and micro-interactions using Framer Motion
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Card support
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Performance**: Lazy loading, code splitting, and optimized build (< 150KB gzipped)

## 📁 Project Structure

```
coretech/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components (Button, Card, Input, etc.)
│   │   ├── layout/          # Layout components (Header, Footer)
│   │   └── sections/        # Page sections
│   ├── contexts/            # React contexts (Theme, Language)
│   ├── i18n/               # Internationalization setup and translations
│   ├── pages/              # All page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Solutions.tsx
│   │   ├── Products.tsx
│   │   ├── Partners.tsx
│   │   ├── Resources.tsx
│   │   └── Contact.tsx
│   ├── App.tsx             # Main app component with routing
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html             # HTML template with SEO meta tags
├── package.json
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rayhan-shhadeh/Coretech.git
cd Coretech
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Color Palette

- **Primary Colors**:
  - Deep Blue: `#0A2463` - Trust, technology, professionalism
  - Electric Cyan: `#00D4FF` - Innovation, connectivity, future-forward

- **Secondary Colors**:
  - Vibrant Orange: `#FF6B35` - Energy, creativity, warmth
  - Dark Charcoal: `#1A1A2E` - Sophistication, contrast

- **Accent Colors**:
  - Soft Gray: `#E8E8E8` - Backgrounds, sections
  - Success Green: `#00C853` - CTAs and positive indicators

### Typography

- **Headings**: Exo 2 (Bold 700, Semi-Bold 600)
- **Body**: Inter (Regular 400, Medium 500)
- **Accent**: Space Grotesk (for stats and highlights)

## 📱 Pages

1. **Homepage** - Hero section with animated network background, services overview, statistics
2. **About Us** - Company story, mission, vision, values, team, timeline
3. **Services** - Six service categories with detailed sub-pages
4. **Solutions** - Industry-specific solutions (Enterprise, SMB, Residential, Healthcare, Education, Government)
5. **Products** - Product catalog with filtering and search
6. **Partners** - Technology partners and brand showcase
7. **Resources** - Blog, case studies, FAQs
8. **Contact** - Contact form and company information

## 🌐 Internationalization

The website supports English and Arabic with full RTL layout support for Arabic. Switch languages using the globe icon in the header.

Translation files are located in:
- `src/i18n/locales/en.json`
- `src/i18n/locales/ar.json`

## 🎭 Theme

Toggle between light and dark modes using the sun/moon icon in the header. The theme preference is saved to localStorage.

## 🔧 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **React Router** - Routing
- **React i18next** - Internationalization
- **Lucide React** - Icons

## 📊 Performance

- First Contentful Paint: < 1.5s
- Build size: ~30KB CSS + ~411KB JS (gzipped: ~140KB total)
- Lighthouse score: 90+ (target)
- Lazy loaded routes for optimal performance
- Optimized animations with GPU acceleration

## 🎯 Company Information

- **Company**: Coretech
- **Industry**: Telecommunications and ICT
- **Location**: Nablus, West Bank, Palestine
- **Founded**: 2023
- **Employees**: 11-50
- **Website**: www.coretechpal.com
- **Phone**: 0097-9236-8180

## 📄 License

© 2023 Coretech. All rights reserved.

## 🤝 Contributing

This is a proprietary project for Coretech. For any updates or changes, please contact the development team.

## 📞 Support

For technical support or inquiries:
- Email: info@coretechpal.com
- Phone: 0097-9236-8180
