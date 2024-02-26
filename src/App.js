import React, { useState } from 'react';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);

  const incrementCounter = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="click-counter">
      <div id="counter">Click count: <span id="clickCount">{clickCount}</span></div>
      <button id="clickButton" onClick={incrementCounter}>Click me</button>
    </div>
  );
}

export default App;

