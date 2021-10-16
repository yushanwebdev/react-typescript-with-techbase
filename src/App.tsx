import { useState } from 'react';

import './App.css';

function App() {
  const [user, setUser] = useState("Yushan");
  // Here `user` type shows as 'string' beacuse of TypeScript`s Type Inference feature.

  return (
    <div className="App">
      <header className="App-header">
        <p>{user}</p>        
      </header>
    </div>
  );
}

export default App;
