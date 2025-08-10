# Unify Starter Kit

Welcome to the **Unify Starter Kit**, a minimal scaffolding to get started building static sites with [Unify](https://github.com/fwdslsh/unify).

![Unify banner](src/assets/favicon.png)

Unify is a zero-boilerplate, convention-based static site generator that uses Apache SSI syntax and simple includes to provide layouts, component includes, and scoped styles/scripts - all at build time. Built for modern performance with Bun-native APIs.

## 🚀 Getting Started

### 1. Clone this repo

```bash
git clone https://github.com/fwdslsh/unify-starter my-site
cd my-site
```

### 2. Install dependencies (optional)

```bash
npm install
```

### 3. Preview your site

```bash
npm run dev
```

### 4. Add Your Content

Now you can begin editing the files in the `src/` to see your changes updated in the browser in realtime.

The built site will appear in the `dist/` folder.

## 📁 Project Structure

```
my-site/
├── src/
│   ├── includes/           # Shared includes (header, footer, etc.)
│   │   ├── head.html
│   │   ├── header.html
│   │   └── footer.html
│   ├── components/         # Reusable components
│   │   └── card.html
│   ├── assets/             # CSS, JS, images
│   │   ├── main.css
│   │   ├── main.js
│   │   └── favicon.png
│   └── index.html          # Your pages
├── dist/                   # Built site (generated)
└── package.json
```

## 🎯 Modern Features

- **Apache SSI Syntax**: Use familiar `<!--#include virtual="/includes/header.html" -->` syntax
- **Bun-Native Performance**: Built exclusively for Bun with native APIs (HTMLRewriter, fs.watch, Bun.serve)
- **Live Development**: Built-in dev server with live reload via Server-Sent Events
- **Asset Tracking**: Automatic CSS asset discovery with recursive @import processing
- **Zero Learning Curve**: Pure HTML and CSS output—no complex frameworks required

## 🏗️ Building & Development

```bash
# Build for production
npm run build

# Start development server with live reload
npm run dev

# Using unify directly (if installed globally)
npx @fwdslsh/unify build
npx @fwdslsh/unify serve
```

Happy hacking with ✨ **Unify v0.4.3** ✨

<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">
<img decoding="async" src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png" width="118" height="41" align="right">
</a>
