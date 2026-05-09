# Sir Flaps-a-Lot

A Flappy Bird-inspired browser game built with PhaserJS where a noble geometric knight flaps through castle hazards.

## Tech Stack

- Vanilla JavaScript (ES modules)
- PhaserJS via npm package
- Vite for local development/build

## Quick Start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the game locally:

   ```bash
   npm run dev
   ```

3. Open the local URL shown in your terminal.

## Available Scripts

- `npm run dev` - Start local dev server
- `npm run start` - Alias to `dev` for contributor convenience
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally

## Project Structure

```text
sir-flaps-a-lot/
├── index.html
├── package.json
├── src/
│   ├── game.js
│   └── scenes/
│       ├── LoreScene.js
│       ├── MenuScene.js
│       ├── GameScene.js
│       └── GameOverScene.js
└── CLAUDE.md
```

## Contribution Notes

- `src/scenes/LoreScene.js`: Intro story and transition into the menu.
- `src/scenes/MenuScene.js`: Main title/instructions scene.
- `src/scenes/GameScene.js`: Core loop (physics, obstacles, score, difficulty).
- `src/scenes/GameOverScene.js`: End screen and restart/menu flow.
- `src/game.js`: Phaser configuration, constants, and scene registration.

Good first contribution ideas:
- Balance tuning for flap strength, obstacle spawn timing, and gap sizes.
- Visual polish to medieval obstacle styling.
- Add optional sound effects and mute toggle.
