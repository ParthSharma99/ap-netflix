import { useState } from "react";
import { HERO, SITE } from "../config";
import "../styles/HeroBanner.css";

export default function HeroBanner() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="hero-banner">
      {HERO.backgroundVideo ? (
        <video
          className="hero-media"
          src={HERO.backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : HERO.backgroundImage && !imgError ? (
        <img
          className="hero-media"
          src={HERO.backgroundImage}
          alt="hero"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="hero-gradient" />
      )}

      <div className="hero-overlay" />

      <div className="hero-content">
        {HERO.badge && (
          <div className="hero-badge">
            <span className="hero-badge-logo">{SITE.logoText}</span>
            <span className="hero-badge-text">{HERO.badge}</span>
          </div>
        )}

        <h1 className="hero-title">{HERO.title}</h1>

        {HERO.subtitle && (
          <p className="hero-subtitle">{HERO.subtitle}</p>
        )}

        {HERO.metadata && HERO.metadata.length > 0 && (
          <div className="hero-metadata">
            {HERO.metadata.map((item, i) => (
              <span key={i} className="hero-metadata-item">{item}</span>
            ))}
          </div>
        )}

        <p className="hero-description">{HERO.description}</p>

        <div className="hero-actions">
          <button className="hero-btn hero-btn-play">
            <svg viewBox="0 0 24 24" fill="currentColor" className="hero-btn-icon">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>
          <button className="hero-btn hero-btn-info">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}
