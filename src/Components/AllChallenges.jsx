import { FiArrowRight, FiClock } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const AllChallenges = () => {
  return (
    <div className="text-white">
      <p className="text-white/70 text-lg mb-10">
        Improve your skills with our coding challenges.
      </p>

      {/* Challenge 1 */}
      <div className="bg-[#12043a] rounded-xl p-6 shadow-[0_0_30px_#7b2cbf33] hover:scale-[1.01] transition-all mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">Click Counter</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1 text-sm text-white/80">
              <FiClock className="text-base" />
              10 points
            </div>
            <NavLink
              to="/challenges/codeditor"
              className="flex items-center gap-1 border border-white/40 hover:border-white text-white/80 hover:text-white px-4 py-1 rounded-full transition-all text-sm"
            >
              Start
              <FiArrowRight />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Challenge 2 */}
      <div className="bg-[#12043a] rounded-xl p-6 shadow-[0_0_30px_#7b2cbf33] hover:scale-[1.01] transition-all mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">RGB Colour Picker</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1 text-sm text-white/80">
              <FiClock className="text-base" />
              15 points
            </div>
            <NavLink
              to="/challenges/rgb-colour-picker"
              className="flex items-center gap-1 border border-white/40 hover:border-white text-white/80 hover:text-white px-4 py-1 rounded-full transition-all text-sm"
            >
              Start
              <FiArrowRight />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Challenge 3 */}
      <div className="bg-[#12043a] rounded-xl p-6 shadow-[0_0_30px_#7b2cbf33] hover:scale-[1.01] transition-all mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">Todo List</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1 text-sm text-white/80">
              <FiClock className="text-base" />
              15 points
            </div>
            <NavLink
              to="/challenges/todo-list"
              className="flex items-center gap-1 border border-white/40 hover:border-white text-white/80 hover:text-white px-4 py-1 rounded-full transition-all text-sm"
            >
              Start
              <FiArrowRight />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Challenge 4 */}
      <div className="bg-[#12043a] rounded-xl p-6 shadow-[0_0_30px_#7b2cbf33] hover:scale-[1.01] transition-all mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">Weather Fetcher</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1 text-sm text-white/80">
              <FiClock className="text-base" />
              10 points
            </div>
            <NavLink
              to="/challenges/weather-fetcher"
              className="flex items-center gap-1 border border-white/40 hover:border-white text-white/80 hover:text-white px-4 py-1 rounded-full transition-all text-sm"
            >
              Start
              <FiArrowRight />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Challenge 5 */}
      <div className="bg-[#12043a] rounded-xl p-6 shadow-[0_0_30px_#7b2cbf33] hover:scale-[1.01] transition-all mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">Portfolio Page</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1 text-sm text-white/80">
              <FiClock className="text-base" />
              20 points
            </div>
            <NavLink
              to="/challenges/portfolio-page"
              className="flex items-center gap-1 border border-white/40 hover:border-white text-white/80 hover:text-white px-4 py-1 rounded-full transition-all text-sm"
            >
              Start
              <FiArrowRight />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllChallenges;
