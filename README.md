# Pixel Art Editor

A web-based pixel art editor built with Next.js and TypeScript. Create and edit pixel art directly in your browser with an intuitive interface and modern web technologies.

## ✨ Current Features

- Interactive HTML5 Canvas-based drawing system
- Real-time pixel-perfect drawing
- Customizable canvas dimensions
- Responsive grid overlay for precise pixel placement
- Dark/Light mode support
- Mouse-based drawing tools

## 🚧 Work in Progress

This project is under active development. Here's what's coming next:

- [ ] Color palette selection and management
- [ ] Save/Load functionality
- [ ] Multiple tools (pencil, eraser, fill bucket)
- [ ] Undo/Redo system
- [ ] Export options (PNG, GIF)
- [ ] Layer support
- [ ] Custom keyboard shortcuts
- [ ] Mobile touch support

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- HTML5 Canvas API - Drawing functionality

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/attilasdev/pixel-art-editor.git
cd pixel-art-editor
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to start creating!

## 💻 Development

The project structure follows Next.js 14 conventions:

```
src/
├── app/             # App router and layouts
├── components/      # React components
│   ├── PixelCanvas  # Main canvas component
│   ├── ColorPalette # Color selection (WIP)
│   └── ToolBoard    # Drawing tools (WIP)
└── styles/          # Global styles
```
