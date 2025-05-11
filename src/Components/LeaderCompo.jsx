import { NavLink } from "react-router-dom";

const LeaderCompo = () => {
  return (
    <div>
      <div className="flex gap-8 mb-6 text-sm">
        <NavLink
          to="points"
          className={({ isActive }) =>
            isActive
              ? "border border-purple-500 px-4 py-1 rounded-md  text-white"
              : "hover:underline cursor-pointer"
          }
        >
          Points
        </NavLink>
        <NavLink
          to="streak"
          className={({ isActive }) =>
            isActive
              ? "border border-purple-500 px-4 py-1 rounded-md  text-white"
              : "hover:underline cursor-pointer"
          }
        >
          Longest Streak
        </NavLink>
        <NavLink
          to="challenge"
          className={({ isActive }) =>
            isActive
              ? "border border-purple-500 px-4 py-1 rounded-md  text-white"
              : "hover:underline cursor-pointer"
          }
        >
          Challenges Completed
        </NavLink>
      </div>
    </div>
  );
};

export default LeaderCompo;
