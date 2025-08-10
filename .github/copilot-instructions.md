# Building a Website with Unify CLI

Unify CLI is a modern, lightweight static site generator designed for frontend developers. Follow these steps to build and deploy your website:

## Prerequisites

- **Bun Runtime**: Install Bun, the runtime required for Unify. Use the following command:
  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```
- **Unify CLI**: This starter kit uses `npx` to run Unify commands directly, so no global installation is required.

## Steps to Build Your Website

### 1. Clone the Starter Kit

```bash
git clone https://github.com/fwdslsh/unify-starter my-site
cd my-site
```

### 2. Install Dependencies

Install the required dependencies using Bun:

```bash
bun install
```

### 3. Preview Your Site

Start the development server to preview your site:

```bash
bun run dev
```

- The server runs at `http://localhost:3000` by default.
- Live reload is enabled, so changes to your files will automatically refresh the browser.

### 4. Build Your Site

Generate the static site files:

```bash
bun run build
```

- The built site will be available in the `dist/` directory.
- Use additional build options for customization:
  - `bun run build --pretty-urls` for clean URLs.
  - `bun run build --base-url https://mysite.com` to set a base URL.

## Project Structure

```
my-site/
├── src/                          # Source files for the static site
│   ├── _includes/                # Reusable HTML components
│   ├── assets/                   # Static assets (CSS, JS, images)
│   └── index.html                # Main page content
├── dist/                         # Generated static site output
├── package.json                  # NPM scripts and site metadata
└── README.md                     # Project documentation
```

## Advanced Usage

### Build with Custom Options

```bash
bun run build --source content --output public
```

### Serve on a Custom Port

```bash
bun run dev --port 8080
```

### Create a Cross-Platform Executable

Generate a standalone executable for your site:

```bash
bun run build:executable
```

