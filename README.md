# Digital Business Card

A responsive digital business card built with React and Vite.
The card layout is mobile-first and switches to a desktop grid at `min-width: 768px`, with the profile photo on the left and the rest of the content on the right.

## Live Demo

Add your deployed link here: `https://your-site-url`

## Features

- Mobile-first single-column layout
- Desktop grid layout for screens above `767px`
- Profile info and call-to-action buttons (`Email`, `LinkedIn`)
- About and Interests sections
- Social footer links

## Tech Stack

- React 19
- Vite 7
- CSS3
- ESLint

## Project Structure

```text
my-react-app/
├── components/
│   ├── About.jsx
│   ├── Footer.jsx
│   ├── Info.jsx
│   └── Interests.jsx
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build locally

```bash
npm run preview
```

## Available Scripts

- `npm run dev`: starts Vite development server
- `npm run build`: creates a production build in `dist/`
- `npm run preview`: serves the production build locally
- `npm run lint`: runs ESLint

## Customization

- Update content in `components/Info.jsx`, `components/About.jsx`, and `components/Interests.jsx`
- Update social links in `components/Footer.jsx`
- Adjust responsive styling in `src/App.css`

## License

This project is open source and available under the MIT License.
