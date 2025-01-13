import { useState } from "react";

export default function UserInput() {
  const [calculatorInputs, setCalculatorInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleInputsChange = (event) => {
    const { name, value } = event.target;
    setCalculatorInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment: </label>
          <input
            name="initialInvestment"
            value={calculatorInputs.initialInvestment}
            type="number"
            required
            onChange={(e) => handleInputsChange(e)}
          />
        </p>
        <p>
          <label>Annual Investment: </label>
          <input
            name="annualInvestment"
            type="number"
            value={calculatorInputs.annualInvestment}
            required
            onChange={(e) => handleInputsChange(e)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return: </label>
          <input
            type="number"
            name="expectedReturn"
            value={calculatorInputs.expectedReturn}
            required
            onChange={(e) => handleInputsChange(e)}
          />
        </p>
        <p>
          <label>Duration: </label>
          <input
            type="number"
            name="duration"
            value={calculatorInputs.duration}
            required
            onChange={(e) => handleInputsChange(e)}
          />
        </p>
      </div>
    </section>
  );
}
