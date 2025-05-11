import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [showDetails, setShowDetails] = useState(false);
  const location = useLocation();

  const navItemClass = (path) =>
    location.pathname.startsWith(path)
      ? "px-4 py-2 bg-pink-500 text-black flex items-center gap-2"
      : "px-4 py-2 bg-[#1a053c] hover:bg-pink-500 flex items-center gap-2";

  return (
    <div className="w-64 border-r border-white flex flex-col justify-between">
      <div>
        <NavLink to="/cosmo" className="text-2xl font-bold p-4">
          COSMO
        </NavLink>
        <ul className="text-sm space-y-1">
          <li className="px-4 py-2 bg-[#1a053c] hover:bg-pink-500 flex items-center gap-2">
            <span>🏠</span> Dashboard
          </li>
          <li className="px-4 py-2 bg-[#1a053c] hover:bg-pink-500 flex items-center gap-2">
            <span>🎯</span> Challenges
          </li>
          <NavLink to="/project" className={navItemClass("/project")}>
            <span>📁</span> Project
          </NavLink>
          <NavLink to="/leaderboard" className={navItemClass("/leaderboard")}>
            <span>🏆</span> Leaderboard
          </NavLink>
        </ul>
      </div>

      {/* Username dropdown */}
      <div className="relative p-4 border-t border-white text-sm">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-2 hover:underline"
        >
          👤 username
        </button>

        {showDetails && (
          <div className="absolute bottom-14 left-4 bg-[#1a053c] border border-white p-4 rounded-md w-56 shadow-xl z-10">
            <p>
              <span className="font-semibold">Name:</span> John Doe
            </p>
            <p>
              <span className="font-semibold">Email:</span> john@example.com
            </p>
            <p>
              <span className="font-semibold">Member since:</span> Jan 2024
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
