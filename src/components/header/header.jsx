import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Styles from "./header.module.css";
import apple_logo from "../../assets/mac-os.png";
import { NestedNav } from "./nested-nav-component/nested-nav";

export function Header() {
  let [isHovered, setIsHovered] = useState("");

  return (
    <header
      className={`${Styles.headerWrapper} ${isHovered ? Styles.expanded : ""}`}
      onMouseLeave={() => {
        setIsHovered("");
      }}
    >
      <div className={`${Styles.outerWrapper} `}>
        <div className={`${Styles.ulWrapper}`}>
          <ul className={Styles.header}>
            <li className={`${Styles.appleLogo} ${Styles.navElement}`}>
              <a href="./">
                <img
                  src={apple_logo}
                  alt="apple-logo"
                  height={20}
                  width={20}
                  color="white"
                  style={{ objectFit: "contain" }}
                />
              </a>
            </li>
            <li
              className={`${Styles.navElement}`}
              onMouseEnter={() => setIsHovered("store")}
            >
              <a href="./">Store</a>
            </li>
            <li
              className={`${Styles.navElement}`}
              onMouseEnter={() => setIsHovered("mac")}
            >
              <a href="./">Mac</a>
            </li>
            <li
              className={`${Styles.navElement}`}
              onMouseEnter={() => setIsHovered("iPad")}
            >
              iPad
            </li>
            <li
              className={`${Styles.navElement}`}
              onMouseEnter={() => setIsHovered("iPhone")}
            >
              iPhone
            </li>
            <li
              className={`${Styles.navElement}`}
              onMouseEnter={() => setIsHovered("watch")}
            >
              Watch
            </li>
            <li
              className={`${Styles.navElement}`}
              onMouseEnter={() => setIsHovered("music")}
            >
              Music
            </li>
            <li
              className={`${Styles.navElement}`}
              onMouseEnter={() => setIsHovered("support")}
            >
              Support
            </li>
            <li
              className={`${Styles.navElement}`}
              onMouseEnter={() => setIsHovered("accessories")}
            >
              Accessories
            </li>
            <li
              className={`${Styles.navElement}`}
              onMouseEnter={() => setIsHovered("entertainment")}
            >
              Entertainment
            </li>
            <li
              className={`${Styles.navElement}`}
              onMouseEnter={() => setIsHovered("airpods")}
            >
              Airpods
            </li>
            <li
              className={`${Styles.navElement}`}
              onMouseEnter={() => setIsHovered("tv-home")}
            >
              Tv & Home
            </li>
            <li
              className={`${Styles.navElement}`}
              onMouseEnter={() => setIsHovered("vision")}
            >
              Vision
            </li>

            <li className={`${Styles.navElement}`}>
              <i className="fa fa-search" aria-hidden="true"></i>
            </li>
            <li className={`${Styles.navElement}`}>
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            </li>
          </ul>
          {isHovered !== "" && <NestedNav hoverText={isHovered} />}
        </div>
      </div>
    </header>
  );
}
