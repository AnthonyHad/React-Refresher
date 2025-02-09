import { useState } from "react";

export default function Login() {
  // Default behavior of the form element is to reload the page on-submit and send an HTTP request to the server
  // We can set the button type directly to "button" to prevent the default behavior which is submitting the form
  // The more elegant solution is to add the onSubmit event listener to the form element and prevent the default behavior

  // we could use a combined state object to store the email and password values
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);

    // Reset the form
    // setEnteredValues({
    //   email: "",
    //   password: "",
    // });
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevState) => ({
      ...prevState,
      [identifier]: value,
    }));

    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: true,
    }));
    console.log("Blur event");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            // value={enteredEmail}
            // onChange={handleEmailChange}
            value={enteredValues.email}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handleInputBlur("password")}
            // value={enteredPassword}
            value={enteredValues.password}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            // onChange={handlePasswordChange}
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
