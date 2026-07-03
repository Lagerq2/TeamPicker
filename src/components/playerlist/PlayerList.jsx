import "./PlayerList.css";

function PlayerList({ players, removePlayer }) {
  return (
    <div className="player-list-section">
      <h2>Spelare ({players.length})</h2>

      {players.length === 0 && (
        <p className="empty">No players added yet</p>
      )}

      <ul className="player-ul">
        {players.map((player, index) => (
          <li key={index} className="player-li">
            <span>{player}</span>
            <button className="delete-player-btn"
              onClick={() => removePlayer(index)}
            >
              Ta bort
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;
