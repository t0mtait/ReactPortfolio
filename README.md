# Tom Tait — Portfolio

Personal portfolio site showcasing projects, skills, education, and professional experience.

## Tech Stack

- **React 18** (Create React App)
- **Tailwind CSS** for styling
- **Dark/Light theme** via ThemeContext

## Sections

- **About** — Bio and overview
- **Skills** — Technical skills
- **Education** — Academic background
- **Experience** — Professional history
- **Projects** — Notable projects
- **Contact** — Email, LinkedIn, GitHub links

## Scripts

```bash
npm install
npm start        # Development server (localhost:3000)
npm test         # Run tests (Jest)
npm run build    # Production build
```

## Theme

Toggle between light and dark mode using the navbar button. Theme preference persists via localStorage.

## Build & Deploy

The `build/` folder is ready for static hosting (Netlify, Vercel, GitHub Pages, etc.).

```bash
# Local preview of production build
npx serve -s build
```
