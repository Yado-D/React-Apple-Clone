import React from "react";
import "./MegaMenu.css";

function GridComponent({ data,columns = 3 }) {
  return (
    <div className={`grid-container columns-${columns}`}>
      {data.map((column, index) => (
        <div key={index} className={`grid-column column-${index + 1}`}>
          <h4>{column.title}</h4>
          <div className="grid-items">
            {column.items.map((item, idx) => (
              <a key={idx} href={`${item.goto}`}>{item.title}</a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GridComponent;

