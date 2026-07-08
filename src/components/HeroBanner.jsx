import { useState } from "react";
import { HERO } from "../config";
import "../styles/HeroBanner.css";

export default function HeroBanner() {
  const [imgError, setImgError] = useState(false);
  const hasMedia =
    (HERO.backgroundVideo || (HERO.backgroundImage && !imgError));

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
        <h1 className="hero-title">{HERO.title}</h1>
        <p className="hero-description">{HERO.description}</p>
      </div>
    </div>
  );
}
