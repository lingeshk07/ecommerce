import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Auth.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignup() {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Signup successful!");
    navigate("/");
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Sign Up</h2>

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />


        <button onClick={handleSignup}>Sign Up</button>


       <button
  className="go-back-btn"
  onClick={() => navigate("/")}
>
  ←
</button>

      </div>
    </div>
  );
}

export default Signup;
