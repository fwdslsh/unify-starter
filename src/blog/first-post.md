---
title: "Getting Started with Unify"
date: "2025-01-15"
author: "Unify Team"
tags: ["tutorial", "getting-started"]
description: "Learn how to build your first static site with Unify's powerful templating system."
layout: "blog"
---

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

    Unify is a modern, lightweight static site generator designed for frontend developers who want to build maintainable static sites with component-based architecture. It uses cascading imports with `data-import` and slot-based composition.

    ## Key Features

    ### 1. Cascading Imports
    Build reusable components with modern `data-import` syntax:

    ```html
    <template data-import="/_includes/header.html"></template>
    <div data-import="/_includes/hero.html">
      <template data-target="title">My Page Title</template>
    </div>
    ```

    ### 2. Markdown Support
    Write content in Markdown with YAML frontmatter for metadata:

    ```markdown
    ---
    title: "My Post"
    date: "2025-01-15"
    layout: "blog"
    ---

    # Your content here
    ```

    ### 3. Layout System
    Organize your site with automatic layout discovery:

    - Create layouts with `<slot>` elements for content insertion
    - Specify layout in frontmatter: `layout: "blog"`
    - Use `<slot></slot>` for main content and `<slot name="head"></slot>` for head content

    ### 4. Live Development Server
    Start developing with hot reload:

    ```bash
    npm run dev
    # or
    unify serve
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

    ## Project Structure

    ```
    src/
    ├── _layout.html       # Default layout
    ├── _includes/         # Reusable components and layouts
    │   ├── _blog.layout.html    # Blog layout
    │   ├── head.html      # HTML head partial
    │   ├── header.html    # Site header
    │   ├── footer.html    # Site footer
    │   └── components/    # Custom components
    ├── assets/            # Static assets
    │   ├── css/          # Stylesheets
    │   ├── js/           # JavaScript files
    │   └── images/       # Images
    ├── blog/             # Blog section
    │   ├── index.html    # Blog index
    │   └── *.md          # Blog posts
    └── index.html        # Homepage
    ```

    ## Next Steps

    - Explore the project structure
    - Try creating your own components in `/_includes/`
    - Add Markdown content with frontmatter
    - Experiment with different layouts using `data-import`
    - Test the CLI build options

    Happy building with Unify! 🚀
  </div>
</article>