import React from 'react';

export default function Navbar({ mode, replaceMode }) {
  const isDark = mode === 'dark';

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="TextCraft home">
          <span className="brand__mark">T</span>
          <span>Text<span className="brand__accent">Craft</span></span>
        </a>
        <div className="site-nav__actions">
          <span className="site-nav__hint">Write with clarity</span>
          <button
            className="theme-toggle"
            type="button"
            onClick={replaceMode}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            aria-pressed={isDark}
          >
            <span className="theme-toggle__icon" aria-hidden="true">{isDark ? '☀' : '☾'}</span>
            <span>{isDark ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
