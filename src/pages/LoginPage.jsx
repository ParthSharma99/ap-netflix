import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { SITE } from "../config";
import "../styles/LoginPage.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    // Small artificial delay for UX polish
    setTimeout(() => {
      const ok = login(username, password);
      if (ok) {
        navigate("/home");
      } else {
        setError("Incorrect username or password. Please try again.");
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="login-page">
      <div className="login-overlay" />

      <nav className="login-nav">
        {SITE.logoImage ? (
          <img src={SITE.logoImage} alt={SITE.title} className="nav-logo-img" />
        ) : (
          <span className="nav-logo-text">{SITE.logoText}</span>
        )}
      </nav>

      <div className="login-card">
        <h1 className="login-title">Sign In</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            autoComplete="username"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            autoComplete="current-password"
            required
          />

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <p className="login-hint">
          This site is private. Sign-ups are not available.
        </p>
      </div>
    </div>
  );
}
