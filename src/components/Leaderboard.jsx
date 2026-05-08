// Leaderboard.jsx - Shows teams ranked by votes
import { useVote } from "../context/VoteContext";

const Leaderboard = () => {
  const { teams, reset } = useVote();

  // Sort teams by votes in descending order
  const sorted = [...teams].sort((a, b) => b.votes - a.votes);

  // Calculate total votes across all teams
  const totalVotes = teams.reduce((acc, team) => acc + team.votes, 0);

  return (
    <div className="leaderboard">
      <h2>🏆 Leaderboard</h2>

      {/* Total votes counter */}
      <p className="total-votes">Total votes: {totalVotes}</p>

      {/* Ranked list of teams */}
      <ol>
        {sorted.map((team, index) => (
          <li key={team.id} className="leaderboard-item">
            <span className="rank">#{index + 1}</span>
            <img src={team.badge} alt={team.name} className="leaderboard-badge" />
            <span className="team-name">{team.name}</span>
            <span className="team-votes">{team.votes} votes</span>
          </li>
        ))}
      </ol>

      {/* Reset all votes button */}
      <button onClick={reset} className="reset-btn">
        🔄 Reset All Votes
      </button>
    </div>
  );
};

export default Leaderboard;