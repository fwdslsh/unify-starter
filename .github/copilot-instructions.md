# Unify Starter Kit

Unify Starter Kit is a minimal scaffolding for building static sites with [Unify](https://github.com/fwdslsh/unify) - a zero-boilerplate, convention-based static site generator that uses only standard HTML and a single `<include />` element to provide layouts, component includes, and scoped styles/scripts.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Bootstrap and Build
- **Node.js Required**: Node.js v20+ is available and required for this project
- **No Dependencies**: Run `npm install` (completes in ~0.3 seconds) - note that no dependencies are installed as this project uses npx to run Unify directly
- **Build the site**: `npm run build` (runs `npx @fwdslsh/unify build`)
  - **NEVER CANCEL**: Build takes 2-3 seconds maximum. Set timeout to 30+ seconds minimum.
  - Clean build: ~2 seconds, cached build: ~1.4 seconds
  - Generates `dist/` directory with processed HTML, CSS, JS, and sitemap.xml
- **Alternative build commands**:
  - `npx @fwdslsh/unify build --clean --minify` - production build with cleanup and minification
  - `npx @fwdslsh/unify build --verbose` - build with debug logging
  - `npx @fwdslsh/unify watch` - watch mode without dev server

### Development Server
- **Start dev server**: `npm run dev` (runs `npx @fwdslsh/unify serve`)
  - **NEVER CANCEL**: Server starts in 2-3 seconds maximum. Set timeout to 30+ seconds minimum.
  - Serves on http://localhost:3000 with live reload
  - File watching works correctly - detects changes and rebuilds automatically
  - Stop with Ctrl+C or terminate the process
- **Alternative server options**:
  - `npx @fwdslsh/unify serve --port 8080` - serve on different port
  - `npx @fwdslsh/unify serve --verbose` - serve with debug logging

## Validation and Testing

### Manual Validation Steps
- **ALWAYS build and run the development server after making changes**
- **Basic validation scenario**:
  1. Run `npm install && npm run build` - should complete without errors
  2. Run `npm run dev` - should start server on localhost:3000
  3. Visit http://localhost:3000 in browser - should load the site
  4. Verify live reload by making a change to `src/index.html` - should auto-rebuild

### Known Issues and Workarounds
- **CRITICAL KNOWN ISSUE**: Unify v0.4.2 has a template processing bug where the main content slot shows the title content instead of the actual page content
  - **Symptom**: Browser shows "Home" instead of expected content like "Hello from Unify" with card component
  - **Impact**: The build process works correctly, dev server starts correctly, but rendered content is incorrect
  - **Workaround**: This is a known bug in the current version of Unify, not a configuration issue
  - **Validation**: Despite this bug, you can still validate that builds complete, dev server starts, live reload works, and file structure is correct

### No Testing Infrastructure
- **No unit tests** - this is a minimal starter kit with no testing framework
- **No linting tools** - no eslint, prettier, or other code quality tools included
- **No CI/CD workflows** - no GitHub Actions or other automated checks

## Project Structure and Navigation

### Key Directories and Files
```
/
├── src/                          # Source files for the static site
│   ├── .components/              # Reusable HTML components
│   │   └── card.html            # Example component with scoped styles
│   ├── .layouts/                # Page layout templates
│   │   └── default.html         # Main layout template with slots
│   ├── assets/                  # Static assets (CSS, JS, images)
│   │   ├── main.css            # Global CSS (currently empty)
│   │   ├── main.js             # Global JavaScript (currently empty)
│   │   └── favicon.png         # Site favicon
│   └── index.html              # Main page content with template slots
├── dist/                        # Generated static site output
│   ├── assets/                 # Processed assets
│   ├── index.html             # Generated HTML with layout applied
│   └── sitemap.xml            # Auto-generated sitemap
├── .unify-cache/               # Build cache directory (auto-generated)
├── package.json               # NPM scripts and site metadata
└── README.md                  # Project documentation
```

### Understanding Unify Concepts
- **Layout System**: Pages use layouts from `src/.layouts/` automatically
  - Default layout: `src/.layouts/default.html` with `<slot>` elements for content insertion
  - Title slot: `<template data-slot="title">Page Title</template>` in page files
  - Main content: Everything outside template tags goes into main `<slot></slot>`
- **Component System**: Include components with `<include src="/.components/component.html" data-prop="value" />`
- **Asset Processing**: Referenced assets in layouts are automatically copied to `dist/assets/`
- **File Processing**: 
  - Files starting with `.` (like `.components/`, `.layouts/`) are treated as partials and not processed as pages
  - Regular HTML files are processed as pages and get layout applied

### Important Files to Know
- **`src/index.html`** - Main page content and template slot examples
- **`src/.layouts/default.html`** - Layout template showing slot usage
- **`src/.components/card.html`** - Component example with scoped styles
- **`package.json`** - Contains site metadata used for sitemap generation (homepage field)

## Common Development Tasks

### Making Content Changes
- **Edit page content**: Modify files in `src/` (not `.components/` or `.layouts/`)
- **Edit components**: Modify files in `src/.components/`
- **Edit layouts**: Modify files in `src/.layouts/`
- **Add assets**: Add files to `src/assets/` and reference them in your HTML

### Creating New Pages
- **Add new page**: Create new `.html` file in `src/` directory
- **Use layout**: Content automatically uses `default.html` layout
- **Set page title**: Add `<template data-slot="title">Your Title</template>` at top of file

### Making Style/Script Changes  
- **Global styles**: Edit `src/assets/main.css`
- **Global scripts**: Edit `src/assets/main.js`
- **Component styles**: Add `<style>` blocks directly in component files
- **Component scripts**: Add `<script>` blocks directly in component files

## Command Reference

### Available NPM Scripts
```bash
npm run build    # Build static site (npx @fwdslsh/unify build)
npm run dev      # Start development server (npx @fwdslsh/unify serve)
```

### Direct Unify Commands
```bash
npx @fwdslsh/unify build                    # Basic build
npx @fwdslsh/unify build --clean           # Clean build (removes dist first)  
npx @fwdslsh/unify build --minify          # Minified production build
npx @fwdslsh/unify build --verbose         # Build with debug output
npx @fwdslsh/unify serve                   # Development server
npx @fwdslsh/unify serve --port 8080       # Serve on different port
npx @fwdslsh/unify watch                   # Watch and rebuild (no server)
npx @fwdslsh/unify --help                  # Show all available options
```

### Directory Operations
```bash
rm -rf dist .unify-cache    # Clean all generated files
rm -rf .unify-cache         # Clear build cache only
```

## Timing Expectations

- **npm install**: ~0.3 seconds (no dependencies to install)
- **npm run build** (clean): ~2 seconds 
- **npm run build** (cached): ~1.4 seconds
- **npm run dev** startup: ~2 seconds
- **File change rebuild**: ~0.1 seconds (nearly instant)

**NEVER CANCEL** any of these operations - they complete very quickly.

## Git and Deployment

### Git Operations
- **Standard git workflow**: This project has no special git requirements
- **Ignore patterns**: `.gitignore` excludes `dist/` directory (generated content)
- **Cache directory**: `.unify-cache/` may be committed or ignored based on preference

### Deployment
- **Static hosting**: Deploy contents of `dist/` directory to any static host
- **Build for production**: Use `npm run build` or `npx @fwdslsh/unify build --minify`
- **Base URL**: Update `homepage` field in `package.json` for correct sitemap URLs