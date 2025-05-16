import Sidebar from "./Sidebar";
import LeaderCompo from "./LeaderCompo";

export default function Points() {
  return (
    <div className="flex min-h-screen text-white bg-[#0a043c]">
      <div className="flex-1 p-10">
        <div className="border border-white rounded-lg p-4 w-full max-w-3xl">
          <div className="grid grid-cols-2 items-center text-sm font-semibold px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">👤</span>
              <span>username</span>
            </div>
            <div className="text-right">
              <span className="text-yellow-400 font-bold">100</span> Points
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
