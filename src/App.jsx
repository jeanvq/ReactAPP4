// App.jsx - Main component for FutVote
import { VoteProvider } from "./context/VoteContext";
import VotingCard from "./components/VotingCard";
import Leaderboard from "./components/Leaderboard";
import { useVote } from "./context/VoteContext";
import "./App.css";

// Inner component to access VoteContext
const VoteApp = () => {
  const { teams } = useVote();

  return (
    <div className="app">
      <header>
        <div className="header-badge">
          <span className="emoji">⚽</span>
          <h1>FutVote</h1>
        </div>
        <p>Who is the best Premier League club right now?</p>
        <span className="season-tag">Season 2025 / 26</span>
      </header>

      <section className="cards-grid">
        {teams.map((team) => (
          <VotingCard key={team.id} team={team} />
        ))}
      </section>

      <Leaderboard />
    </div>
  );
};

// Wrap app with VoteProvider for global state
const App = () => {
  return (
    <VoteProvider>
      <VoteApp />
    </VoteProvider>
  );
};

export default App;