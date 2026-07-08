import "../styles/MediaModal.css";

export default function MediaModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-media">
          {item.type === "video" && item.src ? (
            <video controls autoPlay className="modal-video">
              <source src={item.src} />
              Your browser does not support the video tag.
            </video>
          ) : item.type === "image" && item.src ? (
            <img src={item.src} alt={item.title} className="modal-image" />
          ) : (
            <div className="modal-no-media">No media available.</div>
          )}
        </div>

        <div className="modal-info">
          <h2 className="modal-title">{item.title}</h2>
          {item.description && (
            <p className="modal-description">{item.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
