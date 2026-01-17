import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [passError, setPassError] = useState(false);

  const USERS = [{ email: "akash@gmail.com", password: "123456" }];

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(false);
    setPassError(false);

    setTimeout(() => {
      const user = USERS.find((u) => u.email === email);

      if (!user) {
        setError(true);
        return;
      }

      if (user.password !== password) {
        setPassError(true);
        return;
      }
      console.log("login success");
    }, 3000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="input-email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(false);
          }}
        />
        <br />
        <br />
        <input
          type="text"
          id="input-password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPassError(false);
          }}
        />
        <br />
        <br />
        <button id="submit-form-btn" type="submit">
          Submit
        </button>
      </form>
      {error && <p id="user-error">User not Found</p>}
      {passError && <p id="password-error">Password incorrect </p>}
    </div>
  );
};

export default App;
