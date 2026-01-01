import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Auth.css";

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  function handleLogin() {
    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");

    if (username === storedUser && password === storedPass) {
      setIsLoggedIn(true);
      navigate("/product");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>


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

export default Login;
