import { useState } from "react";
import "../styles/MediaCard.css";

export default function MediaCard({ item, onClick }) {
  const [imgError, setImgError] = useState(false);

  const thumb =
    item.type === "video"
      ? item.thumbnail || ""
      : item.src;

  return (
    <div className="media-card" onClick={() => onClick(item)}>
      <div className="media-card-thumb">
        {thumb && !imgError ? (
          <img
            src={thumb}
            alt={item.title}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="media-card-placeholder">
            {item.type === "video" ? "▶" : "🖼"}
          </div>
        )}

        {/* Hover overlay */}
        <div className="media-card-overlay">
          {item.type === "video" && (
            <div className="media-card-play-icon">▶</div>
          )}
        </div>
      </div>
    </div>
  );
}
