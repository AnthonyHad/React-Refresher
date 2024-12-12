import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

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

  // Setting state will tell react to reexecute the component
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");

  function handleClick(selectedTopic) {
    setSelectedTopic(selectedTopic);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <menu>
            {/* If we don't use arrow function then the function will be called on Render and not on-click */}
            <TabButton onClick={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
