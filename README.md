# iOS Developer Portfolio

A modern, high-performance portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

-   **Apple-inspired Design**: Clean, minimal, and premium UI.
-   **Dark Mode**: Fully supported light and dark themes.
-   **Animations**: Smooth page transitions and interactive elements using Framer Motion.
-   **GitHub Integration**: Dynamically fetches and displays repositories.
-   **Responsive**: Mobile-first design.

## tech Stack

-   **Framework**: Next.js 14+ (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **Icons**: Lucide React
-   **Animation**: Framer Motion

## Getting Started

1.  Clone the repository:
    ```bash
    git clone https://github.com/username/repo-name.git
    cd repo-name
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## Deployment to GitHub Pages

This project is configured for static export (`output: "export"` in `next.config.ts`).

### Steps:

1.  **Configure `next.config.ts`**:
    -   If deploying to `https://username.github.io` (User Site), no changes needed.
    -   If deploying to `https://username.github.io/repo-name` (Project Site), uncomment `basePath` in `next.config.ts` and set it to `/repo-name`.

2.  **Build the project**:
    ```bash
    npm run build
    ```
    This will generate an `out` directory containing the static files.

3.  **Deploy**:
    -   Push the contents of the `out` directory to the `gh-pages` branch, or configure GitHub Actions to build and deploy.

    **Using GitHub Actions (Recommended):**
    -   Go to Settings > Pages.
    -   Source: GitHub Actions.
    -   Use the "Next.js" configure button or create `.github/workflows/deploy.yml`.

### Manual Deployment:

```bash
# Build
npm run build

# Navigate to output directory
cd out

# Initialize git and push to gh-pages
git init
git add -A
git commit -m "Deploy"
git push -f git@github.com:username/repo-name.git main:gh-pages
```

## Customization

-   **Content**: Edit `app/page.tsx`, `app/about/page.tsx`, etc.
-   **GitHub User**: Update `USERNAME` constant in `lib/github.ts` to fetch your repositories.
