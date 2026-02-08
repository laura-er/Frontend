import { useState } from "react";
import "../index.css";

const Register = ({ setPage }: { setPage: (page: "home" | "login" | "register") => void }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Parolele nu coincid!");
      return;
    }

    console.log("Register data:", { name, email, password });
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input
          type="text"
          placeholder="Nume"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        <input
          type="password"
          placeholder="Confirmă parola"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Creează cont</button>

        <div className="auth-switch">
            <p>Ai deja cont?</p>
            
            <span
            className="auth-link"
            onClick={() => setPage("login")}
            >
                Login
            </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
