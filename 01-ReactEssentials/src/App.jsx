import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

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
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedTopic) {
    setSelectedTopic(selectedTopic);
    // Even though we are logging the state after updating it. React schedules update and the state is upadted after render.
    console.log(selectedTopic);
  }

  // We could create a variable called tab content and check if a topic is selected to render content conditionnaly

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.tite} {...conceptItem} />
            ))}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <menu>
            {/* If we don't use arrow function then the function will be called on Render and not on-click */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>

          {!selectedTopic ? <p>Please select a topic</p> : null}
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null}

          {/* We could use the && instead of the terneray experssion which would help us avoid the falsy condition */}
        </section>
      </main>
    </div>
  );
}

export default App;
