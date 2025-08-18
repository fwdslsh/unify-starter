---
title: "Advanced Features Deep Dive"
date: "2025-01-10"
author: "Unify Team"
tags: ["advanced", "features", "templating"]
description: "Explore advanced Unify features including nested layouts, slot templating, and component architecture."
layout: "blog"
---

<article class="blog-post">
  <header class="blog-meta">
    <h1>Advanced Features Deep Dive</h1>
    <p>
      <time datetime="2025-01-10">January 10, 2025</time> • 
      by Unify Team • 
      <span class="tags">Advanced, Features, Templating</span>
    </p>
  </header>

  <div class="blog-content">
    ## Advanced Templating Patterns

    Unify provides powerful templating capabilities built around cascading imports and slot-based composition. Let's explore the advanced features that make Unify a robust static site generator.

    ### Layout System Deep Dive

    Unify uses cascading imports with slot-based composition:

    ```html
    <!-- _layout.html -->
    <!DOCTYPE html>
    <html>
    <head>
      <slot name="head"></slot>
    </head>
    <body>
      <template data-import="/_includes/header.html"></template>
      <main><slot></slot></main>
      <template data-import="/_includes/footer.html"></template>
    </body>
    </html>
    ```

    ### Layout Assignment Strategies

    #### 1. Frontmatter Assignment (Markdown & HTML)
    ```markdown
    ---
    layout: "blog"
    title: "My Blog Post"
    ---
    Content here...
    ```

    #### 2. Default Layout Fallback
    If no layout is specified, Unify uses automatic layout discovery with `_layout.html`

    ### Component Architecture

    Build reusable components with slot-based composition:

    ```html
    <!-- _includes/components/_card.html -->
    <div class="card">
      <h3><slot name="title">Default Title</slot></h3>
      <p><slot>Default content goes here.</slot></p>
    </div>
    ```

    Use components in your pages:
    ```html
    <template data-import="/_includes/components/_card.html">
      <template data-target="title">Custom Title</template>
      Custom content for the card
    </template>
    ```

    ### Asset Management

    #### Automatic Asset Discovery
    Unify automatically discovers and copies referenced assets:

    ```css
    /* main.css */
    @import 'components.css'; /* Auto-discovered */
    
    .hero {
      background-image: url('/assets/images/hero-bg.jpg'); /* Auto-copied */
    }
    ```

    #### Asset Organization
    ```
    src/assets/
    ├── css/
    │   ├── main.css        # Global styles
    │   └── components.css  # Component styles
    ├── js/
    │   ├── main.js         # Global scripts  
    │   └── components.js   # Component scripts
    └── images/
        ├── favicon.png
        └── hero-bg.jpg
    ```

    ### Build Optimization

    #### Pretty URLs
    ```bash
    unify build --pretty-urls
    ```
    - `about.html` → `about/index.html`
    - `blog/post.html` → `blog/post/index.html`

    #### Minification
    ```bash
    unify build --minify
    ```

    #### Custom Asset Copying
    ```bash
    unify build --copy "./static/**/*"
    ```

    ### Development Workflow

    #### Live Reload Setup
    The development server includes automatic live reload:

    ```javascript
    // Automatically injected in development
    if (typeof EventSource !== 'undefined') {
      const eventSource = new EventSource('/__events');
      eventSource.onmessage = (event) => {
        if (event.data === 'reload') {
          window.location.reload();
        }
      };
    }
    ```

    #### Incremental Builds
    Unify tracks dependencies and rebuilds only what's necessary:

    - Change `_includes/header.html` → Rebuilds all pages importing it
    - Change `_includes/_blog.layout.html` → Rebuilds all pages using blog layout
    - Change single page → Rebuilds only that page

    ### Directory Structure Best Practices

    ```
    src/
    ├── .layouts/              # Layout templates
    │   ├── default.html      # Default layout
    │   ├── blog.html         # Blog layout
    │   └── product.html      # Product layout
    ├── _includes/            # Reusable partials
    │   ├── head.html        # HTML head
    │   ├── header.html      # Site header
    │   ├── footer.html      # Site footer
    │   └── components/      # Custom components
    │       ├── _card.html   # Card component
    │       └── _hero.html   # Hero component
    ├── assets/              # Static assets
    │   ├── css/            # Stylesheets
    │   ├── js/             # JavaScript
    │   └── images/         # Images
    ├── blog/               # Blog section
    │   ├── index.html     # Blog index
    │   └── *.md           # Blog posts
    └── index.html         # Homepage
    ```

    ## Performance Best Practices

    1. **Use incremental builds** during development
    2. **Optimize images** before adding to assets
    3. **Minimize CSS/JS** for production builds
    4. **Leverage browser caching** with proper asset naming
    5. **Use cascading imports** for better code organization

    ## Security Considerations

    Unify includes built-in security features:

    - **Path traversal prevention** for includes
    - **Safe asset resolution** from src root
    - **Non-emitting underscore files** by convention

    These advanced features make Unify suitable for complex static sites while maintaining simplicity and performance.
  </div>
</article>