import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

// Props is an object

// function CoreConcept(props) {
//   return <li>
//     <img src={props.image} alt={props.title}/>
//     <h3>{props.title}</h3>
//     <p>{props.description}</p>
//   </li>
// }

function App() {
  // Hooks are only called inside Component functions
  // They must not be nested inside code statements

  // We could create a variable called tab content and check if a topic is selected to render content conditionnaly

  return (
    // <div>
    // Fragments
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
