import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import backgroundImage from "../assets/l2.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a043c] text-white flex flex-col justify-between">
      <header className="flex items-center justify-between px-8 py-6">
        <div className="text-white font-bold text-sm tracking-widest">
          COSMO
        </div>
        <nav className="space-x-4 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-1 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white text-base"
                  : "hover:text-pink-400"
              }`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `px-3 py-1 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white text-base"
                  : "hover:text-pink-400"
              }`
            }
          >
            DASHBOARD
          </NavLink>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              `px-3 py-1 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white text-base"
                  : "hover:text-pink-400"
              }`
            }
          >
            SIGN IN
          </NavLink>
        </nav>
      </header>

      <main
        className="flex-1 flex flex-col items-center justify-center text-center px-4 min-h-[400px]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "900px",
        }}
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Get Ready To Orbit <br /> In The Universe Of Coding
        </h1>
      </main>

      <div className="flex justify-evenly gap-150">
        <p className="text-2xl mb-30  tracking-widest">LEARN. CODE. ORBIT.</p>

        <div className="mb-30">
          <Link
            to="/signup"
            className=" bg-gradient-to-r  from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <footer className="flex items-center justify-between px-8 py-4 text-s">
        <div className="font-bold tracking-widest">COSMO</div>

        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaTwitter />
          </a>
        </div>
      </footer>
    </div>
  );
}
