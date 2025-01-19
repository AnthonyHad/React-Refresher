import Sidebar from "./Components/Sidebar";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";

function App() {
  return (
    <main className="h-sreen my-8 flex gap-8">
      <Sidebar projectName="" />
      <NoProjectSelected />
    </main>
  );
}

export default App;
