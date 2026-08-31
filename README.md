# TextCraft

TextCraft is a React text utility application for formatting, transforming, and analyzing text in real time. It provides a focused editor with a polished responsive interface and light/dark theme support.

## Features

- Convert text to uppercase and lowercase
- Capitalize words
- Reverse text
- Clean extra spaces or remove all whitespace
- Copy transformed text to the clipboard
- View live word count, character count, and estimated reading time
- Preview edited text as you type
- Switch between light and dark themes

## Tech Stack

- React 18
- JavaScript
- Bootstrap 5.3.3
- Custom CSS
- Create React App

## Project Structure

```text
src/
  Components/
    Navbar.js
    Text.js
  App.js
  App.css
  App.test.js
  index.js
  index.css
  setupTests.js
public/
  favicon.svg
  index.html
  manifest.json
  robots.txt
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm start
```

Open `http://localhost:3000` in your browser.

## Available Scripts

### `npm start`

Runs the application in development mode.

### `npm run build`

Creates an optimized production build in the `build` directory.

### `npm test`

Runs the test suite.

## Deployment

Create a production build with `npm run build`, then deploy the generated `build` directory to your preferred static hosting provider.
