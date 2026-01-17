import React, { useState } from 'react'

const App = () => {
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const USERS = [
  { email: "akash@gmail.com", password: "123456" }
];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous errors
    setUserError("");
    setPasswordError("");

    // Simulate async validation
    setTimeout(() => {
      const user = USERS.find((u) => u.email === email);

      if (!user) {
        setUserError("User not found");
        return;
      }

      if (user.password !== password) {
        setPasswordError("Password Incorrect");
        return;
      }

      // Successful login
      alert("Login Successful!");
    }, 3000);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setUserError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          id="input-email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
        {userError && <p id="user-error">{userError}</p>}
      </div>

      <div>
        <input
          id="input-password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        {passwordError && <p id="password-error">{passwordError}</p>}
      </div>

      <button id="submit-form-btn" type="submit">
        Login
      </button>
    </form>
  );
}

export default App