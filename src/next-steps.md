---
title: "Next Steps - Your Unify Journey"
description: "Complete guide on how to customize and use this Unify starter kit for your own projects"
---

# 🚀 Next Steps: Your Unify Journey

Congratulations! You now have a comprehensive understanding of Unify's capabilities. This guide will help you transform this demo into your own project.

## 🎯 Quick Start Checklist

<div class="next-steps-checklist">
  <div class="step-card completed">
    <span class="step-number">✅</span>
    <div class="step-content">
      <h3>Explore the Demo</h3>
      <p>You've seen all Unify features in action</p>
    </div>
  </div>
  
  <div class="step-card">
    <span class="step-number">1</span>
    <div class="step-content">
      <h3>Customize the Design</h3>
      <p>Update colors, fonts, and layout to match your brand</p>
      <a href="#customize-design" class="step-link">Learn how →</a>
    </div>
  </div>
  
  <div class="step-card">
    <span class="step-number">2</span>
    <div class="step-content">
      <h3>Replace Demo Content</h3>
      <p>Replace example content with your own pages and posts</p>
      <a href="#replace-content" class="step-link">Learn how →</a>
    </div>
  </div>
  
  <div class="step-card">
    <span class="step-number">3</span>
    <div class="step-content">
      <h3>Configure Build Options</h3>
      <p>Set up your deployment and build configuration</p>
      <a href="#build-config" class="step-link">Learn how →</a>
    </div>
  </div>
  
  <div class="step-card">
    <span class="step-number">4</span>
    <div class="step-content">
      <h3>Deploy Your Site</h3>
      <p>Deploy to your preferred hosting platform</p>
      <a href="#deploy" class="step-link">Learn how →</a>
    </div>
  </div>
</div>

---

## 🎨 Customize the Design {#customize-design}

### Update Your Brand Colors

The design system uses CSS custom properties that you can easily modify:

```css
/* In src/assets/css/main.css */
:root {
  /* Change these hue values to match your brand */
  --primary-hue: 235;    /* Blue (change to your primary color hue) */
  --secondary-hue: 270;  /* Purple (change to your secondary color hue) */
  --accent-hue: 15;      /* Orange (change to your accent color hue) */
}
```

#### Quick Color Examples:
- **Blue brand**: `--primary-hue: 215;`
- **Green brand**: `--primary-hue: 150;`
- **Red brand**: `--primary-hue: 5;`
- **Purple brand**: `--primary-hue: 280;`

### Customize Typography

Update the font family in the CSS custom properties:

```css
:root {
  --font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Modify Layout and Components

Key files to customize:

<div class="file-list">
  <div class="file-item">
    <code>src/assets/css/main.css</code>
    <span>Global styles, colors, typography</span>
  </div>
  <div class="file-item">
    <code>src/assets/css/components.css</code>
    <span>Component styles (cards, buttons, hero)</span>
  </div>
  <div class="file-item">
    <code>src/_includes/header.html</code>
    <span>Site header and navigation</span>
  </div>
  <div class="file-item">
    <code>src/_includes/footer.html</code>
    <span>Site footer</span>
  </div>
</div>

---

## 📝 Replace Demo Content {#replace-content}

### Update Site Information

1. **Update package.json**:
```json
{
  "name": "your-site-name",
  "description": "Your site description",
  "homepage": "https://yoursite.com"
}
```

2. **Update site metadata** in `src/_includes/head.html`:
```html
<meta name="description" content="Your site description">
<meta name="keywords" content="your, keywords, here">
```

### Replace Pages

<div class="content-structure">
  <h4>Current Structure → Your Content</h4>
  
  <div class="replacement-guide">
    <div class="before-after">
      <div class="before">
        <h5>Demo Content</h5>
        <ul>
          <li><code>src/index.html</code> - Feature demo</li>
          <li><code>src/about/</code> - Sample about pages</li>
          <li><code>src/blog/</code> - Example blog posts</li>
          <li><code>src/products/</code> - Product examples</li>
          <li><code>src/contact.html</code> - Demo contact form</li>
        </ul>
      </div>
      <div class="arrow">→</div>
      <div class="after">
        <h5>Your Content</h5>
        <ul>
          <li><code>src/index.html</code> - Your homepage</li>
          <li><code>src/about/</code> - Your company info</li>
          <li><code>src/blog/</code> - Your blog posts</li>
          <li><code>src/services/</code> - Your services/products</li>
          <li><code>src/contact.html</code> - Your contact info</li>
        </ul>
      </div>
    </div>
  </div>
</div>

### Content Creation Tips

#### For HTML Pages:
```html
<head>
  <title>Your Page Title</title>
  <meta name="description" content="Page description">
</head>
<body data-import="/_layout.html">
  <!-- Your content here -->
</body>
```

#### For Markdown Pages:
```markdown
---
title: "Your Post Title"
layout: "blog"
date: "2024-01-15"
description: "Post description for SEO"
---

# Your Content

Write your content in Markdown here.
```

---

## ⚙️ Configure Build Options {#build-config}

### Available Build Commands

<div class="build-commands-grid">
  <div class="command-card">
    <h4>Development</h4>
    <code>npm run dev</code>
    <p>Start development server with live reload</p>
  </div>
  
  <div class="command-card">
    <h4>Basic Build</h4>
    <code>npm run build</code>
    <p>Build static site to <code>dist/</code> folder</p>
  </div>
  
  <div class="command-card">
    <h4>Pretty URLs</h4>
    <code>npm run build:pretty</code>
    <p>Generate clean URLs (about.html → about/)</p>
  </div>
  
  <div class="command-card">
    <h4>Production</h4>
    <code>npm run build:production</code>
    <p>Optimized build with minification</p>
  </div>
</div>

### Custom Build Configuration

Create a `unify.config.js` file for advanced configuration:

```javascript
export default {
  source: 'src',
  output: 'dist',
  baseUrl: 'https://yoursite.com',
  prettyUrls: true,
  minify: true,
  sitemap: true,
  assets: ['assets/**/*', 'images/**/*'],
  exclude: ['**/_*', '**/.*']
};
```

---

## 🚀 Deploy Your Site {#deploy}

### Static Hosting Options

<div class="hosting-options">
  <div class="hosting-card">
    <h4>🔷 Netlify</h4>
    <p>Build command: <code>npm run build:production</code></p>
    <p>Publish directory: <code>dist</code></p>
    <a href="https://netlify.com" target="_blank" rel="noopener">Deploy on Netlify →</a>
  </div>
  
  <div class="hosting-card">
    <h4>▲ Vercel</h4>
    <p>Build command: <code>npm run build:production</code></p>
    <p>Output directory: <code>dist</code></p>
    <a href="https://vercel.com" target="_blank" rel="noopener">Deploy on Vercel →</a>
  </div>
  
  <div class="hosting-card">
    <h4>📄 GitHub Pages</h4>
    <p>Use GitHub Actions for automated deployment</p>
    <p>Perfect for project documentation</p>
    <a href="https://pages.github.com" target="_blank" rel="noopener">Learn more →</a>
  </div>
  
  <div class="hosting-card">
    <h4>🏃 Cloudflare Pages</h4>
    <p>Fast global CDN with built-in optimization</p>
    <p>Excellent performance and security</p>
    <a href="https://pages.cloudflare.com" target="_blank" rel="noopener">Deploy on CF Pages →</a>
  </div>
</div>

### GitHub Actions Deployment

Create `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy
on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
        
      - name: Install dependencies
        run: bun install
        
      - name: Build site
        run: bun run build:production
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 📚 Advanced Features

### Custom Components

Create reusable components in `src/_includes/components/`:

```html
<!-- src/_includes/components/my-widget.html -->
<div class="my-widget">
  <h3><slot name="title">Custom Widget</slot></h3>
  <p><slot>Reusable component content</slot></p>
</div>
```

Import in any page:
```html
<template data-import="/_includes/components/my-widget.html">
  <template data-target="title">My Custom Title</template>
  Custom content for the widget
</template>
```

### Layout Customization

Create custom layouts in `src/_includes/`:

```html
<!-- src/_includes/_custom.layout.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <template data-import="/_includes/head.html"></template>
  <slot name="head"></slot>
</head>
<body class="custom-layout">
  <template data-import="/_includes/header.html"></template>

  <main class="custom-main">
    <slot></slot>
  </main>

  <template data-import="/_includes/footer.html"></template>
</body>
</html>
```

Use in markdown frontmatter:
```markdown
---
layout: "custom"
---
```

### SEO Optimization

1. **Enable sitemaps** in build configuration
2. **Add structured data** to your layouts:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Your Site Name",
  "url": "https://yoursite.com"
}
</script>
```

3. **Optimize meta tags** for each page
4. **Use semantic HTML** for better accessibility

---

## 🆘 Getting Help

<div class="help-resources">
  <div class="help-card">
    <h4>📖 Documentation</h4>
    <p>Complete Unify CLI documentation and examples</p>
    <a href="https://github.com/fwdslsh/unify" target="_blank" rel="noopener">Read docs →</a>
  </div>
  
  <div class="help-card">
    <h4>🐛 Issues</h4>
    <p>Report bugs or request features</p>
    <a href="https://github.com/fwdslsh/unify/issues" target="_blank" rel="noopener">Open issue →</a>
  </div>
  
  <div class="help-card">
    <h4>💬 Community</h4>
    <p>Join discussions and get help from other users</p>
    <a href="https://github.com/fwdslsh/unify/discussions" target="_blank" rel="noopener">Join discussions →</a>
  </div>
</div>

---

## 🎉 You're All Set!

You now have everything you need to create an amazing static site with Unify. Remember:

- ✅ Start with design customization
- ✅ Replace demo content with your own
- ✅ Configure build options for your needs
- ✅ Deploy to your preferred hosting platform
- ✅ Iterate and improve based on feedback

**Happy building with Unify!** 🚀

<style>
/* Next Steps Page Specific Styles */
.next-steps-checklist {
  display: grid;
  gap: var(--space-lg);
  margin: var(--space-2xl) 0;
}

.step-card {
  display: flex;
  align-items: flex-start;
  gap: var(--space-lg);
  padding: var(--space-xl);
  border: 2px solid var(--surface-variant);
  border-radius: var(--radius-xl);
  transition: all var(--duration-normal) var(--easing-standard);
  position: relative;
  overflow: hidden;
}

.step-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--duration-slow) var(--easing-emphasized);
}

.step-card:hover::before {
  transform: scaleX(1);
}

.step-card.completed {
  border-color: var(--primary);
  background: color-mix(in oklch, var(--primary) 5%, transparent);
}

.step-card.completed::before {
  transform: scaleX(1);
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.step-card.completed .step-number {
  background: var(--primary);
  font-size: 1.5rem;
}

.step-content h3 {
  margin: 0 0 var(--space-sm) 0;
  color: var(--on-surface);
  font-size: 1.25rem;
}

.step-content p {
  margin: 0 0 var(--space-md) 0;
  color: var(--on-surface-variant);
}

.step-link {
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  transition: color var(--duration-normal) var(--easing-standard);
}

.step-link:hover {
  color: var(--primary-dark);
}

.file-list {
  display: grid;
  gap: var(--space-md);
  margin: var(--space-lg) 0;
}

.file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md) var(--space-lg);
  background: var(--surface-variant);
  border-radius: var(--radius-md);
  gap: var(--space-md);
}

.file-item code {
  font-weight: 600;
}

.file-item span {
  color: var(--on-surface-variant);
  font-size: 0.875rem;
}

.content-structure {
  margin: var(--space-xl) 0;
}

.replacement-guide {
  margin: var(--space-lg) 0;
}

.before-after {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: var(--space-lg);
  align-items: center;
}

.before, .after {
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  background: var(--surface-variant);
}

.arrow {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary);
}

.build-commands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
  margin: var(--space-xl) 0;
}

.command-card {
  padding: var(--space-lg);
  border: 1px solid var(--surface-variant);
  border-radius: var(--radius-lg);
  background: var(--surface);
  transition: all var(--duration-normal) var(--easing-standard);
}

.command-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

.command-card h4 {
  margin: 0 0 var(--space-sm) 0;
  color: var(--on-surface);
}

.command-card code {
  display: block;
  margin: var(--space-sm) 0;
  font-weight: 600;
}

.hosting-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-lg);
  margin: var(--space-xl) 0;
}

.hosting-card {
  padding: var(--space-xl);
  border: 1px solid var(--surface-variant);
  border-radius: var(--radius-xl);
  background: var(--surface);
  transition: all var(--duration-normal) var(--easing-standard);
  text-align: center;
}

.hosting-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary);
}

.hosting-card h4 {
  margin: 0 0 var(--space-md) 0;
  font-size: 1.25rem;
}

.hosting-card a {
  display: inline-block;
  margin-top: var(--space-md);
  padding: var(--space-sm) var(--space-lg);
  background: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: all var(--duration-normal) var(--easing-standard);
}

.hosting-card a:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

.help-resources {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
  margin: var(--space-xl) 0;
}

.help-card {
  padding: var(--space-xl);
  border: 2px solid var(--primary);
  border-radius: var(--radius-xl);
  background: color-mix(in oklch, var(--primary) 5%, transparent);
  text-align: center;
  transition: all var(--duration-normal) var(--easing-standard);
}

.help-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.help-card h4 {
  margin: 0 0 var(--space-md) 0;
  color: var(--primary);
  font-size: 1.25rem;
}

.help-card a {
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
}

.help-card a:hover {
  text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .before-after {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
  
  .step-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>