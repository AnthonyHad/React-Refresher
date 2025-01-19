import { useState } from "react";

import Sidebar from "./Components/Sidebar";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    projects: [],
    selectedProject: undefined,
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProject: null,
    }));
  }

  console.log("projectsState:", projectsState);
  let content;

  if (projectsState.selectedProject === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
