import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import ProjectsPage from "./Components/Project";
import Points from "./Components/Points";
import Streak from "./Components/Streak";
import Challange from "./Components/Challange";
import LeaderBoard from "./Components/LeaderBoard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/project" element={<ProjectsPage />} />

        {/* Leaderboard routes */}
        <Route path="/leaderboard" element={<LeaderBoard />}>
          <Route path="points" element={<Points />} />
          <Route path="streak" element={<Streak />} />
          <Route path="challenge" element={<Challange />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
