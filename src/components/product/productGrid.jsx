// ProductGrid.jsx
import React from "react";
import Styles from "./productGrid.module.css";

export function ProductGrid({ children }) {
  return (
    <div className={Styles.productGrid}>
      {children}
    </div>
  );
}