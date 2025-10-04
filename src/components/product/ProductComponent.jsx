import React from "react";
import Styles from "./ProductComponent.module.css";

export function ProductComponent({
  productImage,
  productTitle,
  productSubtitle1,
  productSubtitle2,
  productSubtitle3,
  background,
}) {
  return (
    <section
      className={`${Styles.productSection}`}
      style={{ backgroundColor: background }}
    >
      {/* Text Content */}
      <div className={`${Styles.productContent}`}>
        <h1 
        className={`${Styles.productTitle}`}>{productTitle}
        </h1>
        <p className={`${Styles.productSubtitle1}`}>{productSubtitle1}</p>
        <p className={`${Styles.productSubtitle2}`}>{productSubtitle2}</p>
        <p className={`${Styles.productSubtitle3}`}>{productSubtitle3}</p>

        {/* Links */}
        <div className={`${Styles.productLinks}`}>
          <a href="#" className={`${Styles.productLink}`}>
            Learn more
          </a>
          <a href="#" className={`${Styles.productLink}`}>
            Buy
          </a>
        </div>
      </div>

      {/* product Image */}
      <div className={`${Styles.productImageContainer}`}>
        <img
          src={`images/${productImage}`}
          alt="iPhone 15 Pro"
          className={Styles.productImage}
        />
      </div>
    </section>
  );
}
