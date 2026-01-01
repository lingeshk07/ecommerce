import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <div className="auth-card home-buttons">
        <h2>Welcome</h2>

        <button onClick={() => navigate("/login")}>
          Login
        </button>

        <button onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Home;
