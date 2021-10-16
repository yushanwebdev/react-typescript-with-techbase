import { useState } from "react";
import { User } from "./interfaces";

import "./App.css";

function App() {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = () =>
    setUser({
      name: "Mitchel",
      age: 23,
      country: "the Netherlands",
      address: {
        street: "Main st.",
        number: 88,
        zip: "21345",
      },
      admin: false,
    });

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchUser}>Fetch user on click</button>
        {user && <p>{`Welcome to ${user.name}`}</p>}
      </header>
    </div>
  );
}

export default App;
