# minime Handoff

## Current State

The static site exists as `index.html`, `styles.css`, `script.js`, and `assets/mascot-placeholder.png`. A temporary mascot is in place; the final APNG has not arrived. GitHub repository and Pages deployment are not set up yet.

Read `AGENTS.md` before editing. Meta design guidance is installed at `/Users/chanoot/DESIGN.md`; use it before UI work. The guide is outside this workspace because `getdesign` installed it at the detected parent location.

## Locked Product Decisions

- GitHub owner: `chanooooot`; new public repository name: `minime`.
- Target URL: `https://chanooooot.github.io/minime/`.
- Static site only. No framework, backend, analytics, custom domain, or theme switcher.
- Visual direction: Meta-inspired white canvas, charcoal text, generous whitespace, rounded surfaces, and `#0064E0` pill buttons. Do not use Meta logos, fonts, or copied assets.
- Page has an animated mascot at lower right and a speech bubble. No visible page copy outside the bubble.
- Bubble holds 8–12 original English pirate-adventure lines. Avoid copied manga art and quotes.
- `Talk` chooses a random next line without immediately repeating current line.
- `Share` opens native Web Share when available; otherwise copies current URL and confirms success.
- Use a placeholder APNG first. User will later supply final mascot animation.

## Next Work

1. Test `index.html` at phone and desktop widths. Verify share fallback and no-repeat rule.
2. Replace `assets/mascot-placeholder.png` with user-supplied animated mascot when available; update image path if needed.
3. Initialize and publish public GitHub repository only after user authorizes external GitHub changes.

## Done Means

The hosted page loads at project URL, mascot loops, Talk changes messages, Share works or copies link, and layout remains usable on mobile and desktop.
