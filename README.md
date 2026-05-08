# ⚽ FutVote

A real-time voting app built with React, Firebase, and Vitest. Users can vote for their favorite Premier League club and see live results update instantly.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react) ![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?logo=firebase) ![Vitest](https://img.shields.io/badge/Tested_with-Vitest-6E9F18?logo=vitest) ![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)

## 🗳️ Features

- Vote for your favorite Premier League club
- Real-time vote count powered by Firebase Firestore
- Live leaderboard ranked by votes
- Total vote counter across all teams
- Reset all votes with one click
- Fully reusable `VotingCard` component
- Global state management with React Context + useReducer
- 5 unit tests with Vitest and Testing Library

## 🛠️ Tech Stack

- **React 19** — UI library
- **Vite** — build tool
- **Firebase Firestore** — real-time database
- **React Context + useReducer** — global state management
- **Vitest** — unit testing framework
- **Testing Library** — component testing utilities

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- A Firebase project with Firestore enabled

### Installation

```bash
# Clone the repo
git clone https://github.com/jeanvq/ReactApp4.git
cd ReactApp4

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Running Tests

```bash
npx vitest run
```

## 📁 Project Structure

```
src/
├── components/
│   ├── VotingCard.jsx      # Reusable voting card component
│   └── Leaderboard.jsx     # Ranked leaderboard with total votes
├── context/
│   └── VoteContext.jsx     # Global state with Context + useReducer
├── tests/
│   ├── setup.js            # Vitest setup file
│   └── VotingCard.test.jsx # Unit tests for VotingCard
├── firebase.js             # Firebase configuration
└── App.jsx                 # Main application component
```

## 🧪 Unit Tests

| Test | Description |
|------|-------------|
| renders the team name | Verifies team name displays correctly |
| renders the vote count | Verifies vote counter displays correctly |
| renders the vote button | Verifies vote button is present |
| calls vote when clicked | Verifies vote function is called with correct team ID |
| renders the team badge | Verifies badge image renders with correct src |

## 📸 Preview

> Premier League Big Six — Manchester City, Arsenal, Liverpool, Chelsea, Manchester United, Tottenham

![App Screenshot 1](images/Screenshot%202026-05-07%20at%2010.13.33%E2%80%AFPM.png)
![App Screenshot 2](images/Screenshot%202026-05-07%20at%2010.13.47%E2%80%AFPM.png)
![App Screenshot 3](images/Screenshot%202026-05-07%20at%2010.14.25%E2%80%AFPM.png)
![App Screenshot 4](images/Screenshot%202026-05-07%20at%2010.15.03%E2%80%AFPM.png)

## 👨‍💻 Author

**Jeancarlo** — Web Development Student @ TriOS College  
[GitHub](https://github.com/jeanvq)

---

*Assignment 4 — MWD4C React Development*

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
