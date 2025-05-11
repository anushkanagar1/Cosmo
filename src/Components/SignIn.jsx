import { NavLink, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  const handleProject = () => {
    navigate("/project");
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gradient-to-b from-pink-400 to-purple-700"></div>

      <div className="w-1/2 bg-[#0a043c] flex justify-center items-center">
        <div className="border border-white rounded-3xl p-10 w-[350px]">
          <h2 className="text-white text-2xl font-semibold text-center mb-6">
            Sign in
          </h2>
          <div className="border border-white rounded-2xl p-2 space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-full border border-white bg-transparent text-white placeholder-white focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-full border border-white bg-transparent text-white placeholder-white focus:outline-none"
            />

            <div className="flex justify-between text-sm text-white">
              <NavLink to="/signup" className="hover:underline underline">
                Forgot password?
              </NavLink>
              <NavLink to="/signup" className="hover:underline underline">
                Create an account
              </NavLink>
            </div>

            <button
              onClick={handleProject}
              className="w-full border border-white rounded-full py-2 text-white hover:bg-white hover:text-[#0a043c] transition"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
