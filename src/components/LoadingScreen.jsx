import { useEffect, useState } from "react";
import { SITE } from "../config";
import "../styles/LoadingScreen.css";

export default function LoadingScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hold = setTimeout(() => setFadeOut(true), 2200);
    const done = setTimeout(() => onFinish(), 2800);
    return () => {
      clearTimeout(hold);
      clearTimeout(done);
    };
  }, [onFinish]);

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="loading-logo">
        {SITE.logoImage ? (
          <img src={SITE.logoImage} alt={SITE.title} className="loading-logo-img" />
        ) : (
          <span className="loading-logo-text">{SITE.logoText}</span>
        )}
      </div>
      <div className="loading-bar-wrap">
        <div className="loading-bar" />
      </div>
    </div>
  );
}
