# Unify Complete Demo

Welcome to the **Unify Complete Demo**, a comprehensive showcase of all Unify static site generator features and capabilities.

![Unify banner](src/assets/images/favicon.png)

Unify is a zero-boilerplate, convention-based static site generator that uses Apache SSI syntax and simple includes to provide layouts, component includes, and scoped styles/scripts - all at build time. Built for modern performance with Bun-native APIs.

## 🎯 What This Demo Showcases

This starter project demonstrates every major feature of Unify according to the latest specification:

### ✅ Core Features Demonstrated

- **🔗 Apache SSI Includes**: Component-based architecture with `<!--#include virtual="..." -->`
- **📝 Markdown Processing**: YAML frontmatter with layout assignment
- **🎨 Layout System**: Automatic layout discovery with `_layout.html` files
- **🚀 Live Development Server**: Hot reload with incremental builds
- **📁 Asset Management**: Automatic asset discovery and copying
- **🌐 Pretty URLs**: Clean URL generation with `--pretty-urls`
- **🗺️ Sitemap Generation**: Automatic sitemap.xml creation
- **⚡ Performance**: Incremental builds and dependency tracking
- **🔧 CLI Options**: Minification, custom asset copying, and more

### 📂 Project Structure

```
src/
├── _layout.html            # Default layout (auto-discovered)
├── _includes/              # Reusable components & partials
│   ├── head.html          # HTML head partial
│   ├── header.html        # Site header
│   ├── footer.html        # Site footer
│   ├── card.html          # Example component
│   ├── _blog.layout.html  # Blog-specific layout (named)
│   ├── _products.layout.html # Products layout (named)
│   └── components/        # Advanced components
│       ├── _hero.html     # Hero component
│       └── _navigation.html # Navigation component
├── assets/                # Static assets
│   ├── css/              # Stylesheets
│   │   ├── main.css      # Global styles
│   │   └── components.css # Component styles
│   ├── js/               # JavaScript files
│   │   ├── main.js       # Global scripts
│   │   └── components.js  # Component scripts
│   └── images/           # Images and icons
├── blog/                 # Blog section
│   ├── index.html       # Blog index page
│   ├── first-post.md    # Blog post with frontmatter
│   └── second-post.md   # Advanced features post
├── products/             # Products section
│   ├── index.html       # Products catalog
│   ├── _product-card.html # Reusable product component
│   └── smartphone.html  # Featured product page
├── about/               # About section
│   ├── index.html      # About page
│   └── team.md         # Team page (Markdown)
├── contact.html         # Contact form with JavaScript
└── index.html          # Homepage showcasing all features
```

## 🚀 Getting Started

### Prerequisites

- **Bun Runtime**: Unify requires Bun for optimal performance
  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

### Quick Start

1. **Clone this repository:**
   ```bash
   git clone https://github.com/fwdslsh/unify-starter my-site
   cd my-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to see the demo

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🛠️ CLI Commands & Options

### Development Commands

```bash
# Start development server with live reload
npm run dev
npx @fwdslsh/unify serve

# Watch files without serving
npx @fwdslsh/unify watch

# Custom port
npx @fwdslsh/unify serve --port 8080
```

### Build Commands

```bash
# Basic build
npm run build
npx @fwdslsh/unify build

# Pretty URLs (about.html → about/index.html)
npx @fwdslsh/unify build --pretty-urls

# With minification
npx @fwdslsh/unify build --minify

# Clean build (remove dist first)
npx @fwdslsh/unify build --clean

# Custom asset copying
npx @fwdslsh/unify build --copy "./static/**/*"

# Custom base URL for sitemap
npx @fwdslsh/unify build --base-url https://mysite.com

# Disable sitemap generation
npx @fwdslsh/unify build --no-sitemap
```

## 📋 Feature Demonstrations

### 1. Apache SSI Includes

```html
<!-- Include a header component -->
<!--#include virtual="/_includes/header.html" -->

<!-- Include relative to current file -->
<!--#include file="./local-component.html" -->
```

### 2. Layout System

**Automatic Layout Discovery:**
Create `_layout.html` in your source directory for automatic layout application:

```html
<!-- _layout.html -->
<!DOCTYPE html>
<html>
<head>
  <div data-slot="head"></div>
</head>
<body>
  <div data-slot="content"></div>
</body>
</html>
```

**Named Layouts:**
Create named layouts in `_includes/` directory:

```html
<!-- _includes/_blog.layout.html -->
<!DOCTYPE html>
<html>
<head>
  <div data-slot="head"></div>
</head>
<body>
  {{ content }}
</body>
</html>
```

Assign layouts via frontmatter:

```markdown
---
title: "My Page"
layout: "blog"
---

# Content here
```

### 3. Component Architecture

Create reusable components in `_includes/`:

```html
<!-- _includes/card.html -->
<div class="card">
  <h3>🚀 Fast & Lightweight</h3>
  <p>Unify provides zero-boilerplate static site generation.</p>
</div>
```

Use components in pages:

```html
<!--#include virtual="/_includes/card.html" -->
```

### 4. Asset Management

Assets are automatically discovered and copied:

```css
/* main.css */
@import 'components.css'; /* Auto-discovered */

.hero {
  background: url('/assets/images/hero.jpg'); /* Auto-copied */
}
```

### 5. Markdown with Frontmatter

```markdown
---
title: "Blog Post Title"
date: "2025-01-15"
author: "Author Name"
layout: "blog"
description: "Post description"
---

# Your content here

Regular Markdown content with full feature support.
```

## 🎨 Styling & JavaScript

### Global Styles
- `assets/css/main.css` - Core styles and layout
- `assets/css/components.css` - Component-specific styles

### JavaScript
- `assets/js/main.js` - Global functionality and live reload
- `assets/js/components.js` - Component-specific interactions

### Component-Scoped Assets
Components can include their own styles and scripts inline for encapsulation.

## 🔄 Development Workflow

1. **Edit files in `src/`** - Changes are automatically detected
2. **Live reload** - Browser refreshes automatically on file changes
3. **Incremental builds** - Only changed files and dependencies are rebuilt
4. **Asset tracking** - Referenced assets are automatically copied

### Dependency Tracking

Unify intelligently tracks dependencies:

- Change `_includes/header.html` → Rebuilds all pages that include it
- Change a layout file → Rebuilds all pages using that layout
- Change a single page → Rebuilds only that page
- Change CSS/JS → Updates assets and refreshes browser

## 🌟 Advanced Features

### Pretty URLs
Enable clean URLs for better SEO:
```bash
npx @fwdslsh/unify build --pretty-urls
```
- `about.html` becomes `about/index.html`
- `blog/post.html` becomes `blog/post/index.html`

### Production Optimization
```bash
# Minify HTML for production
npx @fwdslsh/unify build --minify

# Copy additional static files
npx @fwdslsh/unify build --copy "./static/**/*"
```

### SEO Features
- Automatic sitemap.xml generation
- Meta tag support in layouts
- Semantic HTML structure
- Performance optimizations

## 📊 Performance Features

- **Incremental builds** - Only rebuild what changed
- **Asset optimization** - Automatic asset discovery and copying
- **Live reload** - Efficient file watching with Bun-native APIs
- **Memory efficient** - Stream processing for large sites
- **Fast builds** - Typical sites build in under 1 second

## 🔧 Customization

### Adding New Layouts

**For automatic discovery:**
1. Create `_layout.html` in the appropriate directory
2. Use `<div data-slot="content"></div>` where page content should appear

**For named layouts:**
1. Create `src/_includes/_my-layout.layout.html`
2. Use `<div data-slot="content"></div>` where page content should appear
3. Assign via frontmatter: `layout: "my-layout"`

### Creating Components
1. Create files in `src/_includes/` (prefix with `_` for non-emitting partials)
2. Use `<!--#include virtual="/_includes/my-component.html" -->`
3. Components can include styles and scripts inline

### Directory Structure
- Files starting with `_` are non-emitting partials  
- `src/assets/` is automatically copied if referenced
- `src/_layout.html` provides default layout (auto-discovered)
- `src/_includes/` contains components and named layouts
- Any directory structure is supported

## 🤝 Contributing

This demo showcases the current capabilities of Unify. To contribute:

1. **Fork the repository**
2. **Make your changes**
3. **Test thoroughly**
4. **Submit a pull request**

## 📖 Documentation

- [Unify GitHub Repository](https://github.com/fwdslsh/unify)
- [Complete Application Specification](https://github.com/fwdslsh/unify/blob/main/docs/app-spec.md)
- [CLI Reference](https://github.com/fwdslsh/unify#cli-reference)

## 📄 License

This starter kit is licensed under the MIT License. Unify itself is also MIT licensed.

---

**Happy building with ✨ Unify! ✨**

Built with ❤️ by the Unify team | [GitHub](https://github.com/fwdslsh/unify) | [Demo](https://unify-starter.vercel.app/)
