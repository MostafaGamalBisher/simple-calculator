# Simple Calculator

A clean, functional calculator built with vanilla JavaScript, SCSS, and ES Modules. Supports mouse input, keyboard input, and a light/dark theme toggle.

## Live Demo

https://mostafagamalbisher.github.io/simple-calculator/

## Features

- Basic arithmetic: addition, subtraction, multiplication, division
- Decimal point support (single decimal per number)
- Operator chaining (e.g. `5 + 3 * 2` calculates correctly)
- Delete last digit (DEL button or `Backspace` key)
- Reset calculator state (RESET button or `c` key)
- Full keyboard support with visual button feedback on key press
- Light / dark theme toggle (click or press `Enter` on the toggle)

## Keyboard Shortcuts

| Key             | Action            |
| --------------- | ----------------- |
| `0` – `9`       | Enter digit       |
| `.`             | Decimal point     |
| `+` `-` `*` `/` | Operators         |
| `Enter`         | Calculate result  |
| `Backspace`     | Delete last digit |
| `c`             | Reset             |

## Project Structure

```
src/
  js/
    index.js        — coordinator: state, event listeners, handler logic
    display.js      — DOM layer: screen updates
    utils.js        — reusable utilities: toggleClass, pressToggle
  scss/
    main.scss
assets/
dist/
  css/
    main.css
index.html
```

## Architecture

The project follows a four-layer separation of concerns:

- **DOM layer** (`display.js`) — reads state, renders to screen
- **Coordinator** (`index.js`) — receives input events, updates state, calls logic
- **State** (`index.js`) — `currentNumber`, `storedNumber`, `operation`
- **Utilities** (`utils.js`) — reusable, decoupled helper functions

No file reaches into another file's state directly. Values are passed as parameters and returned — keeping each layer independently testable and maintainable.

## State Design

State is managed as strings throughout:

```js
let currentNumber = ''; // number currently being typed
let storedNumber = ''; // number saved before an operator
let operation = ''; // current operator: +, -, *, /
```

Conversion to numbers happens only at calculation time using `parseFloat()`. Results are converted back to strings using `String()` to maintain type consistency across the state.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Requires Node.js. Uses Dart Sass for SCSS compilation.

## Tech Stack

- Vanilla JavaScript (ES Modules)
- SCSS / Dart Sass
- ESLint + Prettier
- GitHub Pages

## Notes

- Division by zero returns `Infinity` — to be handled in a future update
- Repeated `=` presses do not repeat the last operation — planned for a future version
