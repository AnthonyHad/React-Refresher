import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInValid, setEmailIsInValid] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  // Using refs requires less code than using state
  // Downside is that it's discouraged to use refs to manipulate the DOM directly
  // We cannot validate state based on every keystroke while using refs

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    console.log(enteredEmail, enteredPassword);

    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
      setEmailIsInValid(true);
      return;
    }

    setEmailIsInValid(false);

    // Not recommended to manipulate the DOM directly
    // We can use event.target.reset() to reset the form
    // emailRef.current.value = "";
    // passwordRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef} />
          <div className="control-error">
            {emailIsInValid && <p>Please add a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
