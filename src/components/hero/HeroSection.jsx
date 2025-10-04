import React from "react";
import Styles from "./HeroSection.module.css";

export function HeroSection({
  heroTitle,
  heroSubtitle1,
  heroSubtitle2,
  heroImage,
  background = "#000",
  textColr = "#fff",
}) {
  return (
    <section
      className={`${Styles.heroSection}`}
      style={{ backgroundColor: background }}
    >
      {/* Text Content */}
      <div className={`${Styles.heroContent}`}>
        <h1 className={`${Styles.heroTitle}`} style={{ color: textColr }}>
          {heroTitle}
        </h1>
        <p className={`${Styles.heroSubtitle1}`} style={{ color: textColr }}>
          {heroSubtitle1}
        </p>
        <p className={`${Styles.heroSubtitle2}`} style={{ color: textColr }}>
          {heroSubtitle2}
        </p>

        {/* Links */}
        <div className={`${Styles.heroLinks}`}>
          <a href="#" className={`${Styles.heroLink}`}>
            Learn more
          </a>
          <a href="#" className={`${Styles.heroLink}`}>
            Buy
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className={`${Styles.heroImageContainer}`}>
        <img
          src={`images/${heroImage}`}
          alt="iPhone 15 Pro"
          className="hero-image"
        />
      </div>
    </section>
  );
}
