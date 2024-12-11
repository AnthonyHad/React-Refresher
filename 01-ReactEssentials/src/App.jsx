
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


// Props is an object

// function CoreConcept(props) {
//   return <li>
//     <img src={props.image} alt={props.title}/>
//     <h3>{props.title}</h3>
//     <p>{props.description}</p>
//   </li>
// }



function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title = {CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            < CoreConcept {...CORE_CONCEPTS[1]}  />
            < CoreConcept {...CORE_CONCEPTS[2]}  />
            < CoreConcept {...CORE_CONCEPTS[3]}  />
          </ul>
        </section>
        <section id="examples" >
          <menu>
          <TabButton>Hola</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;