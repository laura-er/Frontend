import { useState } from "react";
import "../styles/global.css";
import '../auth.css';
export type Page = "home" | "login" | "register";

type LoginProps = {
  setPage: (page: Page) => void;
};

const Login = ({ setPage }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("Login data:", { email, password });
  };

  return (
      <div className="auth-container">
        <form className="auth-card" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />

          <input
              type="password"
              placeholder="Parola"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
          />

          <button type="submit">Autentificare</button>

          <div className="auth-switch">
            <p>Nu ai cont?</p>

            <span
                className="auth-link"
                onClick={() => setPage("register")}
            >
            Înregistrează-te
          </span>
          </div>
        </form>
      </div>
  );
};

export default Login;
