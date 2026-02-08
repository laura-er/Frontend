import Pagination from "../Pagination";

import React from "react";
import "../../styles/carousel.css";


const Hero = () => {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
     <h1 style={{ color: "#3b3838", textAlign: "center" }}>
  Cartile disponibile
</h1>
      <div className="carousel">
        <div className="carousel-row">
          <div className="carousel-tile" style={{ background: "#46B1C9" }}></div>
          <div className="carousel-tile" style={{ background: "#84C0C6" }}></div>
          <div className="carousel-tile" style={{ background: "#9FB7B9" }}></div>
          <div className="carousel-tile" style={{ background: "#BCC1BA" }}></div>
          <div className="carousel-tile" style={{ background: "#F2E2D2" }}></div>
        </div>
      </div>

      {/* Bara de paginare */}
      <Pagination totalPages={50} />
    </section>
  );
};

export default Hero;

