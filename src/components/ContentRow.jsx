import MediaCard from "./MediaCard";
import "../styles/ContentRow.css";

export default function ContentRow({ rowTitle, items, onCardClick }) {
  return (
    <div className="content-row">
      <h2 className="content-row-title">{rowTitle}</h2>
      <div className="content-row-scroll">
        {items.map((item) => (
          <MediaCard key={item.id} item={item} onClick={onCardClick} />
        ))}
      </div>
    </div>
  );
}
