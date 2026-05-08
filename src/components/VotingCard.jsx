// VotingCard.jsx - Reusable voting card component for each team
import { useVote } from "../context/VoteContext";

// VotingCard receives a team object as a prop
const VotingCard = ({ team }) => {
  const { vote } = useVote();

  return (
    <div className="voting-card">
      {/* Team badge/logo */}
      <img src={team.badge} alt={team.name} className="team-badge" />

      {/* Team name */}
      <h3>{team.name}</h3>

      {/* Vote count */}
      <p className="vote-count">{team.votes} votes</p>
      <p className="vote-count">{team.votes}</p>
<p className="vote-label">votes</p>

      {/* Vote button */}
      <button onClick={() => vote(team.id)} className="vote-btn">
        Vote ⚽
      </button>
    </div>
  );
};

export default VotingCard;