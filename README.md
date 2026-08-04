# TextUtils

TextUtils is a React-based text utility app for quick text transformations and analysis. It helps users edit text, clean spacing, copy results, and view basic reading stats in a simple interface with dark mode support.

## Features

- Convert text to uppercase
- Convert text to lowercase
- Capitalize text
- Reverse text
- Remove all whitespaces
- Remove extra spaces
- Copy text to the clipboard
- View word count, character count, and estimated reading time
- Toggle between light and dark mode

## Tech Stack

- React 18
- Create React App
- Bootstrap 5
- Firebase Hosting configuration

## Project Structure

```text
src/
  Components/
    Alert.js
    Navbar.js
    Text.js
  App.js
  App.css
  index.js
public/
  index.html
firebase.json
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

Runs the app in development mode.

### `npm run build`

Builds the app for production in the `build` folder.

### `npm test`

Runs the test suite.

## Deployment

This project includes Firebase Hosting configuration with the production build served from the `build` directory.

## Use Cases

- Clean and format text before sharing
- Quickly analyze word and character counts
- Remove unwanted spacing from copied content
- Prepare text for notes, assignments, or social posts

## Author

Mayuri V Patil
