import Sidebar from "../Components/Sidebar";
import LeaderCompo from "../Components/LeaderCompo";
import { Outlet } from "react-router-dom";

const LeaderBoard = () => {
  return (
    <div className="flex h-full text-white bg-[#0a043c] overflow-y-hidden">
      <Sidebar />

      <div className="flex-1 p-10">
        <h2 className="text-3xl font-bold flex items-center gap-2 mb-6">
          🏆 Leaderboard
        </h2>

        <LeaderCompo />

        <Outlet />
      </div>
    </div>
  );
};

export default LeaderBoard;
