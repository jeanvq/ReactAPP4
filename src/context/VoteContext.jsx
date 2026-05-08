// VoteContext.jsx - Global state management for FutVote
import { createContext, useContext, useReducer, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, doc, setDoc, getDoc } from "firebase/firestore";

// Initial voting items - Premier League Big Six
const initialTeams = [
  { id: "man-city", name: "Manchester City", badge: "https://crests.football-data.org/65.png", votes: 0 },
  { id: "arsenal", name: "Arsenal", badge: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg", votes: 0 },
  { id: "liverpool", name: "Liverpool", badge: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg", votes: 0 },
  { id: "chelsea", name: "Chelsea", badge: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg", votes: 0 },
  { id: "man-utd", name: "Manchester United", badge: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg", votes: 0 },
  { id: "tottenham", name: "Tottenham", badge: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg", votes: 0 },
];

// Reducer - handles vote and reset actions
const voteReducer = (state, action) => {
  switch (action.type) {
    case "VOTE":
      return state.map((team) =>
        team.id === action.payload
          ? { ...team, votes: team.votes + 1 }
          : team
      );
    case "RESET":
      return state.map((team) => ({ ...team, votes: 0 }));
    case "LOAD":
      return action.payload;
    default:
      return state;
  }
};

// Create context
const VoteContext = createContext();

// Provider component
export const VoteProvider = ({ children }) => {
  const [teams, dispatch] = useReducer(voteReducer, initialTeams);

  // Listen to Firestore in real time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "votes"), (snapshot) => {
      if (!snapshot.empty) {
        // Merge Firestore data with initialTeams to keep badges
        const loaded = initialTeams.map((team) => {
          const firestoreDoc = snapshot.docs.find((d) => d.id === team.id);
          return firestoreDoc ? { ...team, votes: firestoreDoc.data().votes } : team;
        });
        dispatch({ type: "LOAD", payload: loaded });
      }
    });
    return () => unsubscribe();
  }, []);

  // Vote for a team - read current value from Firestore first
  const vote = async (id) => {
    const teamRef = doc(db, "votes", id);
    const teamSnap = await getDoc(teamRef);
    const currentVotes = teamSnap.exists() ? teamSnap.data().votes : 0;
    const team = initialTeams.find((t) => t.id === id);
    await setDoc(teamRef, { ...team, votes: currentVotes + 1 });
  };

  // Reset all votes in Firestore
  const reset = async () => {
    for (const team of initialTeams) {
      const teamRef = doc(db, "votes", team.id);
      await setDoc(teamRef, { ...team, votes: 0 });
    }
  };

  return (
    <VoteContext.Provider value={{ teams, vote, reset }}>
      {children}
    </VoteContext.Provider>
  );
};

// Custom hook to use VoteContext
export const useVote = () => useContext(VoteContext);