# 💕 Valentine's Gift Website 💕

A beautiful and interactive Valentine's Day gift website built with React, TypeScript, and modern web technologies. This website features a romantic landing page with animated hearts and a playful Valentine's proposal interface.

## ✨ Features

- **Romantic Landing Page**: Beautiful gradient background with floating animated hearts
- **Interactive Valentine's Proposal**: Playful "Will you be my Valentine?" interface
- **Confetti Animation**: Celebratory confetti when the proposal is accepted
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Smooth Animations**: Powered by Framer Motion for delightful user experience
- **Modern UI**: Built with Material-UI and Tailwind CSS

## 🚀 Live Demo

Visit the live website: [https://mesayaaa.github.io/valentine-gift/](https://mesayaaa.github.io/valentine-gift/)

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Framer Motion** - Smooth animations and transitions
- **Material-UI** - Beautiful UI components
- **Tailwind CSS** - Utility-first CSS framework
- **React Confetti** - Celebratory confetti effects

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/mesayaaa/valentine-gift.git
cd valentine-gift
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚀 Deployment

### GitHub Pages Deployment

1. Build the project:
```bash
npm run build
# or
pnpm build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
# or
pnpm deploy
```

The website will be available at: `https://mesayaaa.github.io/valentine-gift/`

## 🎨 Customization

### Changing the Repository Name

If you want to deploy this to your own GitHub repository:

1. Update `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name/"
}
```

2. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: "/your-repo-name/",
  // ... rest of config
});
```

### Customizing Content

- **Landing Page**: Edit `src/LandingPage.tsx` to change the loading screen
- **Main Content**: Edit `src/MainPage.tsx` to customize the Valentine's proposal
- **Styling**: Modify the CSS classes and Material-UI theme in the components

## 📱 Responsive Design

The website is fully responsive and works beautifully on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🎭 Animations

- **Floating Hearts**: Animated hearts that float around the screen
- **Heartbeat Effect**: Pulsing animation on the main title
- **Confetti**: Celebratory confetti when the proposal is accepted
- **Smooth Transitions**: Framer Motion powered page transitions

## 💝 Special Features

- **Interactive Buttons**: The "No" button changes text each time it's clicked
- **Growing "Yes" Button**: The "Yes" button grows larger each time "No" is clicked
- **Confetti Celebration**: Beautiful confetti animation when accepted
- **Redirect Link**: Links to a travel places website after acceptance

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💕 Made with Love

This Valentine's gift website was created with love and care. Perfect for surprising your special someone on Valentine's Day! 💖

---

**Happy Valentine's Day! 💕🌹**
