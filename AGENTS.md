# Repository Guidelines

## Project Structure & Module Organization
This is a static copywriting portfolio built with plain HTML and CSS.

- `index.html` is the main portfolio homepage.
- `project-*.html` files are individual portfolio case-study pages.
- `css/style.css` contains shared portfolio styling.
- `landing-page/` contains a standalone fictional landing page sample with its own `index.html` and `style.css`.
- `images/` is reserved for optimized visual assets.

Keep new portfolio pages at the repository root using the existing `project-name.html` pattern. Add shared visual changes to `css/style.css`; use page-specific CSS only when needed.

## Build, Test, and Development Commands
There is no build step or package manager configuration. The site can be opened directly in a browser.

- `start index.html` opens the main portfolio on Windows.
- `start landing-page/index.html` opens the standalone landing page sample.
- `python -m http.server 8000` serves the repository at `http://localhost:8000` for browser-like relative path behavior.

If adding tooling later, document the exact command here and commit the related config file.

## Coding Style & Naming Conventions
Use semantic HTML and accessible landmarks where practical (`header`, `main`, `section`, `nav`, descriptive link text). Keep indentation at two spaces for nested HTML blocks. Use lowercase, hyphenated file names such as `project-email.html` and CSS class names such as `.work` or `.notice`.

CSS currently uses compact rules and custom properties in `:root`. Reuse existing variables like `--paper`, `--ink`, `--muted`, and `--accent` before adding new colors. Keep copy changes direct and portfolio-focused.

## Testing Guidelines
No automated tests are configured. Before submitting changes, manually check:

- Main navigation links and all project links.
- Responsive layout around desktop width and below `820px`.
- Browser console for missing assets or broken paths.
- Page metadata, especially `<title>` and `<meta name="description">`.

For HTML validation, use the W3C Markup Validation Service.

## Commit & Pull Request Guidelines
No Git history is available here, so no repository-specific convention could be inferred. Use short, imperative commit messages, for example `Add email case study` or `Update portfolio intro copy`.

Pull requests should include a brief summary, affected pages, screenshots for visual changes, and notes about manual checks performed. Link any related issue or brief when available.

## Agent-Specific Instructions
Keep changes small and static-site friendly. Do not introduce frameworks, build tools, or external dependencies unless the task explicitly requires them.
