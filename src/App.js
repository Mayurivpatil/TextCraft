import './App.css';
import Navbar from './Components/Navbar';
import Text from './Components/Text';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const replaceMode = () => {
    const nextMode = mode === 'light' ? 'dark' : 'light';
    setMode(nextMode);
  };

  return (
    <div className={`app app--${mode}`}>
      <Navbar mode={mode} replaceMode={replaceMode} />
      <main className="app__main">
        <Text mode={mode} />
      </main>
    </div>
  );
}

export default App;
