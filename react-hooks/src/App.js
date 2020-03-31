// Dependencies
import React, { useState, useEffect } from 'react';

// Styles
import './App.css';

function App() {
  // Local state
  const [count, setCount] = useState(0);

  // useEffect runs both after the first render and after every update
  useEffect(() => { // This arrow function as our "effect"

    // useEffect it will remember the effect we used
    // useEffect runs after every update
    console.log('Clicked times ->', count); // each effect “belongs” to a particular render
  });

  return (
    <div className="App">
      <p>Clicked times { count }</p>

      <button
        type="button"
        onClick={() => setCount(count + 1)} // Every time we re-render, we schedule a different effect, replacing the previous one
      >
        Click me!
      </button>
    </div>
  );
}

export default App;
