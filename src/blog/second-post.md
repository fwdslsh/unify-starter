---
title: "Advanced Features Deep Dive"
date: "2025-01-10"
author: "Unify Team"
tags: ["advanced", "features", "templating"]
description: "Explore advanced Unify features including nested layouts, slot templating, and component architecture."
---

<template target="title">Advanced Features Deep Dive</template>

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

    Unify provides powerful templating capabilities that go beyond simple includes. Let's explore the advanced features that make Unify a robust static site generator.

    ### Slot-Based Templating

    Use slots to create flexible, reusable layouts:

    ```html
    <!-- Layout file -->
    <div class="layout">
      <header>
        <slot name="header">Default header</slot>
      </header>
      <main>
        <slot></slot> <!-- Default slot -->
      </main>
      <aside>
        <slot name="sidebar"></slot>
      </aside>
    </div>
    ```

    ```html
    <!-- Page using the layout -->
    <template target="header">
      <h1>Custom Page Header</h1>
    </template>
    <template target="sidebar">
      <nav>Custom navigation</nav>
    </template>
    
    <p>This goes in the default slot</p>
    ```

    ### Layout Override Strategies

    #### 1. Frontmatter Override (Markdown)
    ```markdown
    ---
    layout: "custom-layout.html"
    ---
    Content here...
    ```

    #### 2. Data Attribute Override (HTML)
    ```html
    <div data-layout="/_includes/special-layout.html">
      Content here...
    </div>
    ```

    ### Component Architecture

    Build complex components with isolated styles and scripts:

    ```html
    <!-- _includes/components/_product-card.html -->
    <div class="product-card" data-product-id="{{ id }}">
      <img src="{{ image }}" alt="{{ title }}">
      <h3>{{ title }}</h3>
      <p class="price">{{ price }}</p>
      <slot name="actions">
        <button class="btn">Add to Cart</button>
      </slot>
    </div>

    <style scoped>
    .product-card { /* component styles */ }
    </style>

    <script>
    // Component-specific JavaScript
    document.querySelectorAll('.product-card').forEach(card => {
      // Add interaction logic
    });
    </script>
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
    npx @fwdslsh/unify build --pretty-urls
    ```
    - `about.html` → `about/index.html`
    - `blog/post.html` → `blog/post/index.html`

    #### Minification
    ```bash
    npx @fwdslsh/unify build --minify
    ```

    #### Custom Asset Copying
    ```bash
    npx @fwdslsh/unify build --assets "./static/**/*"
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

    - Change `_layout.html` → Rebuilds all pages using it
    - Change `_includes/header.html` → Rebuilds all pages including it
    - Change single page → Rebuilds only that page

    ## Performance Best Practices

    1. **Use incremental builds** during development
    2. **Optimize images** before adding to assets
    3. **Minimize CSS/JS** for production builds
    4. **Leverage browser caching** with proper asset naming

    ## Security Considerations

    Unify includes built-in security features:

    - **Path traversal prevention** for includes
    - **Safe asset resolution** from src root
    - **Non-emitting underscore files** by convention

    These advanced features make Unify suitable for complex static sites while maintaining simplicity and performance.
  </div>
</article>