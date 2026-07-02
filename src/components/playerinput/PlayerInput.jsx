import { useState } from "react";
import "./PlayerInput.css";

function PlayerInput({ addPlayer }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    // Hindrar webbläsaren från att ladda om sidan
    e.preventDefault(); 
    if (!name.trim()) return;

    addPlayer(name);
    setName("");
  };

  return (
    <div className="player-input-card">
      <h2>Lägg till spelare</h2>
      
      <form className="player-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter player name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}

export default PlayerInput;
