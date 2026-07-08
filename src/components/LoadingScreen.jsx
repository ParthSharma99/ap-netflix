import { useEffect, useState } from "react";
import { SITE } from "../config";
import "../styles/LoadingScreen.css";

export default function LoadingScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hold = setTimeout(() => setFadeOut(true), 2600);
    const done = setTimeout(() => onFinish(), 3300);
    return () => {
      clearTimeout(hold);
      clearTimeout(done);
    };
  }, [onFinish]);

  return (
    <div className={`loading-screen${fadeOut ? " fade-out" : ""}`}>
      <div className="loading-n-wrap">
        {/* Back layer – unlit N */}
        <span className="loading-n loading-n-back">{SITE.logoText}</span>
        {/* Front layer – lit N, revealed left → right */}
        <span className="loading-n loading-n-front">{SITE.logoText}</span>
        {/* Shine beam that sweeps left → right */}
        <div className="loading-n-shine" />
      </div>
    </div>
  );
}
