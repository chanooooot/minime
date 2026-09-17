# Repository Guidelines

## Project Structure & Module Organization

This repository hosts the static `minime` GitHub Pages site. Keep the page intentionally small:

- `index.html` holds semantic page structure.
- `styles.css` holds responsive presentation.
- `script.js` holds only client-side interactions: random bubble text and sharing.
- `assets/` holds committed site media. The mascot belongs at `assets/mascot.apng`.

Do not introduce a framework, build directory, or package manifest unless the page needs a capability that plain browser APIs cannot provide.

## Design Rules

Before UI work, install or read the Meta guide with:

```bash
npx getdesign@latest add meta
```

Use its white canvas, charcoal text, generous whitespace, rounded surfaces, and Meta Blue (`#0064E0`) pill buttons. Do not use Meta logos, fonts, or copied brand assets. Keep the mascot and speech bubble as the visual focus. The site contains no text outside the bubble except accessible labels and temporary interaction feedback.

## Development & Checks

Run a local static server from the repository root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`. Test at a narrow phone width and a desktop width. Verify `Talk` changes the bubble without immediately repeating a line, and `Share` uses native sharing or copies the URL when native sharing is unavailable.

## Coding Style

Use two-space indentation in HTML, CSS, and JavaScript. Prefer semantic HTML elements and native `<button>` controls. Use lowercase kebab-case CSS classes such as `.speech-bubble`; use camelCase JavaScript names such as `pickNextMessage`. Keep message strings together in one array. Use CSS for layout and visual motion; use JavaScript only for behavior.

## Testing, Commits & Pull Requests

No test framework exists. For interaction changes, add a small browser-checkable assertion only when logic becomes non-trivial. Use Conventional Commit subjects, for example `feat: add talk button` or `fix: avoid repeated bubble text`. Pull requests should state the visible change, link any issue, and include desktop and mobile screenshots.
