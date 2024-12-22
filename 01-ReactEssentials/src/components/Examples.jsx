import { useState } from "react";
import TabButton from "./TabButton.jsx";
import Tabs from "./Tabs.jsx";
import Section from "./Section.jsx";

import { EXAMPLES } from "../data.js";

export default function Examples() {
  // Setting state will tell react to reexecute the component
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedTopic) {
    setSelectedTopic(selectedTopic);
    // Even though we are logging the state after updating it. React schedules update and the state is updated after render.
    console.log(selectedTopic);
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
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
          </>
        }
      >
        {/* We could use the && instead of the ternery expression which would help us avoid the falsy condition */}
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
      </Tabs>
    </Section>
  );
}
