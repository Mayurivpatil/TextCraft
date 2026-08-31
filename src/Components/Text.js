import React, { useMemo, useState } from 'react';

const getWordCount = (value) => value.trim() ? value.trim().split(/\s+/).length : 0;

export default function Text() {
  const [text, setText] = useState('');
  const words = useMemo(() => getWordCount(text), [text]);
  const readingTime = Math.max(1, Math.ceil(words / 200));
  const hasText = text.length > 0;
  const updateText = (nextText) => setText(nextText);
  const actions = [
    { label: 'UPPERCASE', onClick: () => updateText(text.toUpperCase()) },
    { label: 'lowercase', onClick: () => updateText(text.toLowerCase()) },
    { label: 'Capitalize', onClick: () => updateText(text.replace(/\b\w/g, (character) => character.toUpperCase())) },
    { label: 'Reverse', onClick: () => updateText([...text].reverse().join('')) },
    { label: 'Clean spaces', onClick: () => updateText(text.replace(/\s+/g, ' ').trim()) },
    { label: 'Remove whitespace', onClick: () => updateText(text.replace(/\s/g, '')) },
  ];

  const copyText = async () => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <div className="workspace">
      <section className="hero">
        <p className="eyebrow">A BETTER WAY TO EDIT</p>
        <h1>Shape every word<br /><span>with intention.</span></h1>
        <p className="hero__description">A focused workspace for refining text, finding its rhythm, and sharing polished copy.</p>
      </section>
      <section className="editor-card" aria-labelledby="editor-title">
        <div className="editor-card__header">
          <div><p className="section-kicker">TEXT EDITOR</p><h2 id="editor-title">Your draft</h2></div>
          <button className="clear-button" type="button" onClick={() => updateText('')} disabled={!hasText}>Clear all</button>
        </div>
        <label className="visually-hidden" htmlFor="textform">Enter text to edit</label>
        <textarea className="text-area" id="textform" rows="10" value={text} onChange={(event) => setText(event.target.value)} placeholder="Start typing or paste your text here..." />
        <div className="editor-card__footer"><span>{text.length.toLocaleString()} characters</span><span className="editor-card__shortcut">⌘ + V to paste</span></div>
      </section>
      <section className="tool-panel" aria-label="Text transformations">
        <div className="tool-panel__heading"><p className="section-kicker">QUICK ACTIONS</p><span>Transform your text in one click</span></div>
        <div className="action-list">
          {actions.map((action) => <button key={action.label} className="action-button" type="button" onClick={action.onClick} disabled={!hasText}>{action.label}</button>)}
          <button className="copy-button" type="button" onClick={copyText} disabled={!hasText}><span aria-hidden="true">⧉</span> Copy text</button>
        </div>
      </section>
      <section className="insights" aria-labelledby="insights-title">
        <div className="insights__heading"><p className="section-kicker">LIVE INSIGHTS</p><h2 id="insights-title">Text at a glance</h2></div>
        <div className="stat-grid">
          <article className="stat-card"><strong>{words.toLocaleString()}</strong><span>Words</span></article>
          <article className="stat-card"><strong>{text.length.toLocaleString()}</strong><span>Characters</span></article>
          <article className="stat-card"><strong>{words ? `${readingTime} min` : '—'}</strong><span>Reading time</span></article>
        </div>
        <article className="preview-card"><div className="preview-card__top"><h3>Preview</h3><span>{hasText ? 'LIVE' : 'WAITING FOR TEXT'}</span></div><p>{hasText ? text : 'Your formatted text will appear here as you write.'}</p></article>
      </section>
    </div>
  );
}
