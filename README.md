# 🍫 Simply Chocolate

<img src=/public/preview.webp alt="Preview" />

A modern landing page for a premium chocolate brand, built with React + Vite as part of my frontend learning journey.

## 🚀 Live Demo

[simply-chocolate.vercel.app](https://simply-chocolate.vercel.app)

## 🛠️ Tech Stack

- **React 19** — component-based UI
- **Vite** — blazing fast build tool
- **CSS Modules** — scoped, conflict-free styles
- **Swiper** — touch slider for reviews section
- **AOS** — scroll animations
- **EmailJS** — contact form without backend
- **react-hot-toast** — toast notifications
- **modern-normalize** — CSS reset

## 📦 Features

📱 Fully responsive — 3 breakpoints (375px / 768px / 1200px)

- 🍔 Mobile menu with scroll lock
- 🎨 Hover overlays on ingredient cards
- 🖼️ Adaptive images with 1x/2x retina support
- 💬 Review modal with star rating
- ⭐ Star rating system
- 🔄 Swiper slider with autoplay and pagination
- 💾 Reviews saved to localStorage
- ➕ Load more reviews button
- ✉️ Working contact form via EmailJS
- 🎞️ Scroll animations via AOS
- 🔔 Toast notifications via react-hot-toast
- ♿ Accessible markup — semantic HTML, aria-labels

## 🏗️ Project Structure

src/
├── components/
│ ├── Header/
│ ├── MobileMenu/
│ ├── Hero/
│ ├── Benefits/
│ ├── Taste/
│ ├── Made/
│ ├── Reviews/
│ ├── Footer/
│ └── Modal/
├── styles/
│ └── global.css
└── App.jsx

## 🚀 Getting Started

```bash
git clone https://github.com/Bashmachok1982/Simply-Chocolate-react-vite-Alexander
cd Simply-Chocolate-react-vite-Alex
npm install
npm run dev
```

## 🔑 Environment Variables

Create `.env` file in root:
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SUBSCRIBE_TEMPLATE_ID=your_subscribe_template_id

## 📚 What I Learned

- `useState` & `useEffect` hooks
- Props & lifting state up
- Controlled forms with validation
- CSS Modules & responsive design
- Component architecture
- Local storage for data persistence
- Third-party libraries integration
- Working with SVG sprites
- Adaptive images with `<picture>` tag

---

Design based on [Simply Chocolate Figma mockup](https://www.figma.com/design/V0iVV3ZPME2xnuGZVjVKDj/).

Made with ❤️ and a lot of 🍫
