import React from "react";
import GridComponent from "../MegaMenu/MegaMenu";
import NavData from "../../../assets/sample-data/nav-item-data.json";

export function NestedNav({ hoverText }) {
  const navItem = NavData[hoverText];
  console.log("NestedNav hoverText:", hoverText, navItem);
  if (!navItem) {
    console.error(`No data found for: ${hoverText}`);
    return null;
  }
  return <GridComponent data={navItem} columns={navItem.length} />;
}
