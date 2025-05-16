import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Dashboard from "./Pages/Dashboard";
import ProjectsPage from "./Pages/Project";
import Points from "./Components/Points";
import Streak from "./Components/Streak";
import Challange from "./Components/LeaderBoardChallange";
import LeaderBoard from "./Pages/LeaderBoard";
import LandingPage from "./Pages/LandingPage";
import Challenges from "./Pages/Challenges";
import AllChallenges from "./Components/AllChallenges";
import ChallengesOfDay from "./Components/ChallengesOfDay";
import PalindromeDetector from "./Components/PalindromeDetector";
import CodeEditor from "./Components/CodeEditor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="project" element={<ProjectsPage />} />

        <Route path="leaderboard" element={<LeaderBoard />}>
          <Route index element={<Points />} />
          <Route path="points" element={<Points />} />
          <Route path="streak" element={<Streak />} />
          <Route path="challenge" element={<Challange />} />
        </Route>

        <Route path="challenges" element={<Challenges />}>
          <Route index element={<ChallengesOfDay />} />
          <Route path="daychallenges" element={<ChallengesOfDay />} />
          <Route path="allChallenges" element={<AllChallenges />} />
        </Route>
        <Route path="/challenges/detector" element={<PalindromeDetector />} />
        <Route path="/challenges/codeditor" element={<CodeEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
