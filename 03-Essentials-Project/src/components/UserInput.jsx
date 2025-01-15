export default function UserInput({ onChange, calculatorInputs }) {
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
            onChange={(e) => onChange(e)}
          />
        </p>
        <p>
          <label>Annual Investment: </label>
          <input
            name="annualInvestment"
            type="number"
            value={calculatorInputs.annualInvestment}
            required
            onChange={(e) => onChange(e)}
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
            onChange={(e) => onChange(e)}
          />
        </p>
        <p>
          <label>Duration: </label>
          <input
            type="number"
            name="duration"
            value={calculatorInputs.duration}
            required
            onChange={(e) => onChange(e)}
          />
        </p>
      </div>
    </section>
  );
}
