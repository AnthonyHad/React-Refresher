import Button from "./Button";

export default function Sidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="mx-8 space-y-4 w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold">Your Projects</h2>
      <Button
        onClick={() => {
          console.log("Button clicked in Sidebar");
          onStartAddProject();
        }}
      >
        + Add Project
      </Button>
      <ul className="space-y-2">
        {projects.map((project) => {
          let cssClasses =
            " w-full text-left px-2 py-1 rounded-sm  hover:text-stone-200 hover:bg-stone-400";
          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-20";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
