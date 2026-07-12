import { useEffect, useMemo, useRef, useState } from "react";
import netflixSound from "../assets/netflix-sound.mp3";
import "../styles/LoadingScreen.css";

export default function LoadingScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);
  const audioRef = useRef(null);
  const audioUnlockedRef = useRef(false);
  const furNumbers = useMemo(
    () => Array.from({ length: 31 }, (_, index) => 31 - index),
    [],
  );
  const lampNumbers = useMemo(
    () => Array.from({ length: 28 }, (_, index) => index + 1),
    [],
  );

  useEffect(() => {
    const audio = new Audio(netflixSound);
    audio.preload = "auto";
    audioRef.current = audio;

    const audioDelay = 450;
    const unlockEvents = ["pointerdown", "touchstart", "keydown"];

    const removeUnlockListeners = () => {
      unlockEvents.forEach((eventName) => {
        window.removeEventListener(eventName, handleFirstInteraction);
      });
    };

    const tryPlayAudio = () => {
      const playPromise = audio.play();

      if (playPromise && typeof playPromise.catch === "function") {
        playPromise
          .then(() => {
            audioUnlockedRef.current = true;
            removeUnlockListeners();
          })
          .catch(() => {
            if (!audioUnlockedRef.current) {
              unlockEvents.forEach((eventName) => {
                window.addEventListener(eventName, handleFirstInteraction, {
                  once: true,
                });
              });
            }
          });
      }
    };

    function handleFirstInteraction() {
      audioUnlockedRef.current = true;
      tryPlayAudio();
    }

    const playAudio = setTimeout(() => {
      tryPlayAudio();
    }, audioDelay);

    const hold = setTimeout(() => setFadeOut(true), 3600);
    const done = setTimeout(() => onFinish(), 4200);

    return () => {
      clearTimeout(playAudio);
      clearTimeout(hold);
      clearTimeout(done);
      removeUnlockListeners();
      audio.pause();
      audio.currentTime = 0;
      audioRef.current = null;
      audioUnlockedRef.current = false;
    };
  }, [onFinish]);

  const renderBrush = () => (
    <div className="effect-brush">
      {furNumbers.map((furNumber) => (
        <span key={furNumber} className={`fur-${furNumber}`} />
      ))}
    </div>
  );

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div id="container">
        <netflixintro letter="N">
          <div className="helper-1">
            {renderBrush()}
            <div className="effect-lumieres">
              {lampNumbers.map((lampNumber) => (
                <span key={lampNumber} className={`lamp-${lampNumber}`} />
              ))}
            </div>
          </div>
          <div className="helper-2">{renderBrush()}</div>
          <div className="helper-3">{renderBrush()}</div>
          <div className="helper-4">{renderBrush()}</div>
        </netflixintro>
      </div>
    </div>
  );
}
