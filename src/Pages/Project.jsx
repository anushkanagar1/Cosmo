import Sidebar from "../Components/Sidebar";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Click Counter",
      status: "Done",
      started: "1/04/2025",
      completed: "---",
      statusColor: "text-green-400",
    },
    {
      name: "RGB Colour Picker",
      status: "In-progress",
      started: "1/04/2025",
      completed: "---",
      statusColor: "text-yellow-400",
    },
    {
      name: "Todo List",
      status: "To-do",
      started: "1/04/2025",
      completed: "---",
      statusColor: "text-red-500",
    },
  ];

  return (
    <div className="flex h-screen text-white bg-[#0a043c]">
      <Sidebar />

      {/* Content */}
      <div className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-6">Your Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0a043c] border border-[#1a1a40] rounded-xl p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.9)]"
            >
              <div className="flex justify-between items-center text-sm">
                <div>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <div className="w-20 h-1 bg-white mt-1"></div>
                </div>
                <div className="flex gap-10 text-xs">
                  <div>
                    <div>Status</div>
                    <div className={`${project.statusColor}`}>
                      {project.status}
                    </div>
                  </div>
                  <div>
                    <div>Started on</div>
                    <div>{project.started}</div>
                  </div>
                  <div>
                    <div>Completed</div>
                    <div>{project.completed}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
