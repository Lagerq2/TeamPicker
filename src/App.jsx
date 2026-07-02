import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import PlayerInput from "./components/playerinput/PlayerInput";
import PlayerList from "./components/playerlist/PlayerList";
import Team from "./components/team/Team";

function App() {
  const [players, setPlayers] = useState([]);
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);

  const addPlayer = (player) => {
    setPlayers([...players, player]);
  };

  const pickTeams = () => {
    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);

    const midIndex = Math.ceil(shuffledPlayers.length / 2);

    setTeamA(shuffledPlayers.slice(0, midIndex));
    setTeamB(shuffledPlayers.slice(midIndex));
  };

  return (
    <>
      <Navbar />

      <main className="app-container">

        <h2>Team Picker</h2>

        <PlayerInput addPlayer={addPlayer} />

        <PlayerList players={players} />

        <button className="pick-teams-btn" onClick={pickTeams}>
          Pick Teams
        </button>

        <div className="teams">

          <Team
            title="Team A"
            players={teamA}
          />

          <Team
            title="Team B"
            players={teamB}
          />

        </div>

      </main>
    </>
  );
}

export default App;