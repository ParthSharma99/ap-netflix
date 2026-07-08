import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { SITE } from "../config";
import "../styles/Navbar.css";

const NAV_LINKS = ["Home", "Shows", "Movies", "Games", "My Netflix"];

export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      {/* Left: profile avatar */}
      <div className="navbar-left" ref={menuRef}>
        <button
          className="navbar-avatar"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Profile menu"
        >
          <span className="navbar-avatar-icon">😊</span>
          <span className="navbar-avatar-caret">▾</span>
        </button>
        {menuOpen && (
          <div className="navbar-dropdown">
            <button className="navbar-dropdown-item" onClick={handleLogout}>
              Sign Out
            </button>
          </div>
        )}
      </div>

      {/* Center: search + nav links */}
      <div className="navbar-center">
        <button className="navbar-search-btn" aria-label="Search">
          <svg className="navbar-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            className={`navbar-link${activeLink === link ? " active" : ""}`}
            onClick={() => setActiveLink(link)}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Right: N logo */}
      <div className="navbar-right">
        {SITE.logoImage ? (
          <img src={SITE.logoImage} alt={SITE.title} className="navbar-logo-img" />
        ) : (
          <span className="navbar-logo-text">{SITE.logoText}</span>
        )}
      </div>
    </nav>
  );
}
