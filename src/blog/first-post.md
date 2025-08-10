---
title: "Getting Started with Unify"
date: "2025-01-15"
author: "Unify Team"
tags: ["tutorial", "getting-started"]
description: "Learn how to build your first static site with Unify's powerful templating system."
layout: "_layout.html"
---

<template target="title">Getting Started with Unify</template>

<article class="blog-post">
  <header class="blog-meta">
    <h1>Getting Started with Unify</h1>
    <p>
      <time datetime="2025-01-15">January 15, 2025</time> • 
      by Unify Team • 
      <span class="tags">Tutorial, Getting Started</span>
    </p>
  </header>

  <div class="blog-content">
    ## What is Unify?

    Unify is a modern, lightweight static site generator designed for frontend developers who want to build maintainable static sites with component-based architecture. It uses familiar Apache SSI syntax and modern HTML templating.

    ## Key Features

    ### 1. Component-Based Architecture
    Build reusable components with `<include>`, `<template>`, and `<slot>` elements:

    ```html
    <include src="/_includes/components/_hero.html">
      <template target="title">Welcome to My Site</template>
      <template target="subtitle">Built with Unify</template>
    </include>
    ```

    ### 2. Markdown Support
    Write content in Markdown with YAML frontmatter for metadata:

    ```markdown
    ---
    title: "My Post"
    date: "2025-01-15"
    layout: "_layout.html"
    ---

    # Your content here
    ```

    ### 3. Layout System
    Organize your site with automatic layout discovery and nested layouts:

    - `src/_includes/_layout.html` - Global fallback layout
    - `src/blog/_layout.html` - Blog section layout  
    - `src/products/_layout.html` - Products section layout

    ### 4. Live Development Server
    Start developing with hot reload:

    ```bash
    npm run dev
    # or
    npx @fwdslsh/unify serve
    ```

    ## Getting Started

    1. **Clone the starter:**
       ```bash
       git clone https://github.com/fwdslsh/unify-starter my-site
       cd my-site
       ```

    2. **Install dependencies:**
       ```bash
       npm install
       ```

    3. **Start developing:**
       ```bash
       npm run dev
       ```

    4. **Build for production:**
       ```bash
       npm run build
       ```

    ## Next Steps

    - Explore the `/src` directory structure
    - Try creating your own components in `/_includes/components/`
    - Add Markdown content with frontmatter
    - Experiment with slot templating

    Happy building with Unify! 🚀
  </div>
</article>