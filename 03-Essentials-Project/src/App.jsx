import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [calculatorInputs, setCalculatorInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = calculatorInputs.duration >= 1;

  const handleInputsChange = (event) => {
    const { name, value } = event.target;
    setCalculatorInputs((prevInputs) => ({
      ...prevInputs,
      [name]: +value,
    }));
  };
  return (
    <>
      <Header />
      <UserInput
        calculatorInputs={calculatorInputs}
        onChange={handleInputsChange}
      />
      {!inputIsValid && <p className="center">Please enter a valid duration</p>}
      {inputIsValid && <Results inputs={calculatorInputs} />}
    </>
  );
}

export default App;
