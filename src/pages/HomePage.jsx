import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import ContentRow from "../components/ContentRow";
import MediaModal from "../components/MediaModal";
import { ROWS } from "../config";
import "../styles/HomePage.css";

export default function HomePage() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="home-page">
      <Navbar />
      <HeroBanner />

      <div className="home-content">
        {ROWS.map((row, idx) => (
          <ContentRow
            key={idx}
            rowTitle={row.rowTitle}
            items={row.items}
            onCardClick={setSelectedItem}
          />
        ))}
      </div>

      <MediaModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
