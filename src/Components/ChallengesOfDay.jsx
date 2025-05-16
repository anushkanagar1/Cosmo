import { LuClock3 } from "react-icons/lu";
import { GoStarFill } from "react-icons/go";
import { NavLink } from "react-router-dom";

const ChallengesOfDay = () => {
  return (
    <div className="bg-[#0b0120] text-white p-10 font-sans">
      <div className="flex justify-center">
        <div className="bg-[#10052d] rounded-xl px-8 py-6 max-w-3xl w-full relative shadow-[0_0_35px_#a02cf2] border border-white/10">
          <div className="absolute top-4 right-6 text-sm text-yellow-400 font-semibold">
            Medium
          </div>
          <h2 className="text-center text-2xl font-semibold mb-3">
            Palindrome Detector
          </h2>
          <p className="text-center text-sm text-gray-300 mb-6 leading-relaxed">
            Write a function that checks if a given string is a palindrome...
          </p>

          <div className="flex justify-center items-center gap-6 mb-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <LuClock3 className="text-base" />
              20 min
            </div>
            <div className="flex items-center gap-2">
              <GoStarFill className="text-base" />
              50 points
            </div>
          </div>

          <div className="flex justify-center">
            <NavLink
              to="/challenges/detector"
              className="px-5 py-1 border border-pink-500 rounded-full
              text-white text-sm hover:bg-pink-600/20 transition-all"
            >
              {" "}
              Start Challenge
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesOfDay;
