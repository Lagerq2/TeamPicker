import "./Team.css";

function Team({ title, players }) {
  return (
    <div className="team-box">
      <h3>{title}</h3>
      {players.map((player) => (
        <p key={player} className="team-player-item">
          {player}
        </p>
      ))}
    </div>
  );
}

export default Team;
