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

  function handleCancelProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProject: undefined,
    }));
  }
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random().toString(),
      };
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log("projectsState:", projectsState);
  let content;

  if (projectsState.selectedProject === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCancelProject}
      />
    );
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
