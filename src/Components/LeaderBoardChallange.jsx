export default function LeaderBoardChallange() {
  return (
    <div className="flex min-h-screen text-white bg-[#0a043c]">
      <div className="flex-1 p-10">
        <div className="border border-white rounded-lg p-4 w-full max-w-4xl">
          <div className="grid grid-cols-3 items-center text-sm font-semibold px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">👤</span>
              <span>username</span>
            </div>
            <div className="text-yellow-400 text-center">
              Challenges Completed: <span className="font-bold">4</span>
            </div>
            <div className="text-yellow-400 text-center">
              Rank: <span className="font-bold">14</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
