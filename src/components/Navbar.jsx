import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { SITE } from "../config";
import "../styles/Navbar.css";

export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {SITE.logoImage ? (
          <img src={SITE.logoImage} alt={SITE.title} className="navbar-logo-img" />
        ) : (
          <span className="navbar-logo-text">{SITE.logoText}</span>
        )}
      </div>
      <button className="navbar-logout" onClick={handleLogout}>
        Sign Out
      </button>
    </nav>
  );
}
