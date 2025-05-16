import ChallengeCompo from "../Components/ChallengeCompo";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";

const Challenges = () => {
  return (
    <div className="flex h-screen text-white bg-[#0a043c]">
      <Sidebar />

      <div className="flex-1 p-10">
        <ChallengeCompo />
      </div>
    </div>
  );
};

export default Challenges;
