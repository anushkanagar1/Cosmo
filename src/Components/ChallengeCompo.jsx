import { NavLink, Outlet } from "react-router-dom";
import { FaBolt } from "react-icons/fa6";

const ChallengeCompo = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">Challenge</h1>

      <div className="flex gap-6 items-center mt-6 mb-10 text-lg">
        <NavLink
          to="daychallenges"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-1 rounded-full border transition-all ${
              isActive
                ? "border-[#ff44cc] text-white shadow-[0_0_12px_#ff44cc]"
                : "border-white/30 text-white/60 hover:text-white hover:border-white/60"
            }`
          }
        >
          🏆 Challenge Of The Day
        </NavLink>

        <NavLink
          to="allChallenges"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-1 rounded-full border transition-all ${
              isActive
                ? "border-[#ff44cc] text-white shadow-[0_0_12px_#ff44cc]"
                : "border-white/30 text-white/60 hover:text-white hover:border-white/60"
            }`
          }
        >
          <FaBolt /> All Challenges
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default ChallengeCompo;
