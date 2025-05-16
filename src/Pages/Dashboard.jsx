import { Link } from "react-router-dom";
import { Home, Trophy, Folder, BarChart } from "lucide-react";
import Sidebar from "../Components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#0a043c] text-white">
      <Sidebar />

      <main className="flex-1 p-10 space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Welcome back, User!</h1>
          <p className="text-sm text-white/70">
            Continue your coding journey, with daily challenges and sprints
          </p>
        </div>

        <section className="bg-[#12084b] rounded-xl border border-white p-6 shadow-inner shadow-purple-800/40 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-center mb-4">
            Challenges Joined
          </h2>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span>5 tiny apps in 5 days</span>
              <span>3/5 Projects</span>
            </div>
            <div className="flex justify-between">
              <span>Java 30 in 30</span>
              <span>3/5 Projects</span>
            </div>
            <div className="flex justify-between">
              <span>Dev Arcade</span>
              <span>3/5 Projects</span>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-[#12084b] rounded-xl border border-white p-6 shadow-inner shadow-purple-800/40 text-center">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <ul className="space-y-2">
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVA</li>
            </ul>
          </div>
          <div className="bg-[#12084b] rounded-xl border border-white p-6 shadow-inner shadow-purple-800/40 text-center">
            <h2 className="text-xl font-semibold mb-4">Your Stats</h2>
            <ul className="space-y-2 text-sm">
              <li>
                Challenges Completed: <strong>12</strong>
              </li>
              <li>
                Your Rank: <strong>150</strong>
              </li>
              <li>
                Earned Points: <strong>500</strong>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
