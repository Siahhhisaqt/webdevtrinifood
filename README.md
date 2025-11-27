# TriniFood - Taste the Caribbean

A responsive 6-page website showcasing the culinary delights of Trinidad and Tobago.

## Project Overview
This project is a personal assignment to build a responsive website using HTML5, CSS3, and JavaScript. It features a custom design, interactive elements, and is optimized for performance.

## Technology Stack
- **HTML5**: Semantic structure for accessibility and SEO.
- **CSS3**: Styling with **Tailwind CSS** (via CLI) for a modern, responsive design.
- **JavaScript**: Vanilla JS for interactive features (Mobile Menu, Lightbox, Form Validation).
- **Fonts**: Google Fonts (Poppins, Open Sans).
- **Icons**: Heroicons (SVG).

## Folder Structure
- `/img`: Images for the gallery and layout.
- `/js`: JavaScript files (`main.js`).
- `/css`: Compiled CSS files (`styles.css`).
- `/media`: Video/Audio assets.
- `/src`: Source files for Tailwind CSS.

## Features
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop.
- **Interactive Gallery**: A JavaScript-powered lightbox for viewing food images.
- **Contact Form**: Client-side validation for name, email, phone, and address.
- **Performance**: Optimized assets and lazy loading for images.
- **Accessibility**: Semantic HTML, ARIA roles, and alt text for screen readers.

## Deployment & CDN
**Provider**: Netlify (Recommended) or Vercel.
**Configuration**:
- **Build Command**: `npm run build:css`
- **Publish Directory**: `.` (Root directory)
- **Environment**: Ensure Node.js is selected if prompted.

## Frameworks & Libraries
- **HTML5**: Semantic structure used throughout (`<nav>`, `<main>`, `<article>`, etc.).
- **CSS Framework**: **Tailwind CSS** (v3.4).
    - Used via CLI for development (`npm run build:css`).
    - Configured in `tailwind.config.js`.
    - Source files located in `/css/src`.
- **JavaScript**: Vanilla JavaScript (ES6+) for all interactivity.
    - No external JS libraries used (except Tailwind CDN for submission stability).
- **Fonts**: Google Fonts (**Poppins** for headings, **Open Sans** for body).

## Performance Metrics
*Note: Run a Lighthouse audit in Chrome DevTools to get your specific scores.*
- **Optimization Strategies**:
    - **Lazy Loading**: Native `loading="lazy"` attribute added to all gallery images.
    - **Image Optimization**: Images served from local `/img` folder.
    - **Minification**: CSS is minified when building for production.
    - **Caching**: Static assets are cache-friendly.

## Accessibility & SEO Strategies
- **Semantic HTML**: Proper use of heading hierarchy (`h1` to `h3`), landmarks (`nav`, `main`, `footer`), and lists.
- **ARIA Attributes**:
    - `aria-label="Toggle mobile menu"` added to the mobile navigation button.
    - `aria-expanded` state managed via JavaScript for the mobile menu.
- **Alt Text**: All images include descriptive `alt` attributes.
- **SEO**:
    - Unique `<title>` and `<meta name="description">` for every page.
    - `robots.txt` and `sitemap.xml` included for crawling.
    - Responsive design ensures mobile-friendliness (a key SEO ranking factor).

## Screenshots
![Homepage Screenshot](./media/screenshot.png)

## Credits
- **Images**: Provided by user and Unsplash.
- **Fonts**: Google Fonts.
- **Icons**: Heroicons.
