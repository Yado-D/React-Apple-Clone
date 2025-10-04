import React from "react";
import Styles from "./footer.module.css";

export function Footer() {
  const footerUpperText = [
    "New and qualified returning subscribers only. $12.99/month after free trial. Only one offer per Apple Account and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchase. This offer is not available if you or your Family have previously accepted an Apple TV+ 3 months free or 1 year free offer. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.",
    "New subscribers only. $12.99/month after trial. Plan automatically renews until cancelled. Terms apply.",
    "One subscription per Family Sharing group. Plan automatically renews until cancelled.",
    "The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.",
    "Limited-time offer; offer may end at any time. Free Apple TV+ access for students ends when you no longer qualify or do not renew your Apple Music Student subscription. Offer good for verified college students only and does not extend to a Family Sharing group.",
  ];

  const footerMiddleData = [
    // Column 1
    {
      categories: [
        {
          title: "Shop and Learn",
          items: [
            "Store",
            "Mac",
            "iPad",
            "iPhone",
            "Watch",
            "Vision",
            "AirPods",
          ],
        },
        {
          title: "Apple Wallet",
          items: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
        },
      ],
    },
    // Column 2
    {
      categories: [
        {
          title: "Account",
          items: [
            "Manage Your Apple Account",
            "Apple Store Account",
            "iCloud.com",
          ],
        },
        {
          title: "Entertainment",
          items: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade"],
        },
      ],
    },
    // Column 3
    {
      categories: [
        {
          title: "Apple Store",
          items: [
            "Find a Store",
            "Genius Bar",
            "Today at Apple",
            "Group Reservations",
          ],
        },
        {
          title: "For Business",
          items: ["Apple and Business", "Shop for Business"],
        },
      ],
    },
    // Column 4
    {
      categories: [
        {
          title: "Apple Values",
          items: [
            "Accessibility",
            "Education",
            "Environment",
            "Inclusion and Diversity",
          ],
        },
        {
          title: "About Apple",
          items: [
            "Newsroom",
            "Apple Leadership",
            "Career Opportunities",
            "Investors",
          ],
        },
      ],
    },
  ];

  return (
    <footer className={`${Styles.footerWrapper}`}>
      <div className={`${Styles.outerWrapper}`}>
        <div className={`${Styles.upperFooter}`}>
          {footerUpperText.map((text, index) => (
            <p key={index}>{`${index + 1}. ${text}`}</p>
          ))}
          <p>
            Major League Baseball trademarks and copyrights are used with
            permission of MLB Advanced Media, L.P. All rights reserved.
          </p>
        </div>
        <div>
          <hr />
        </div>
        <div className={`${Styles.footerGrid}`}>
          {footerMiddleData.map((column, columnIndex) => (
            <div key={columnIndex} className={`${Styles.footerColumn}`}>
              {column.categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className={`${Styles.category}`}>
                  <h4>{category.title}</h4>
                  <ul>
                    {category.items.map((item) => (
                      <li key={item}>
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={`${Styles.lowerFooter}`}>
          <p>
            More ways to shop: Find an Apple Store or other retailer near you.
            Or call <span>1-800-MY-APPLE</span> (1-800-692-7753).
          </p>
          <hr />
          <p>
            Copyright © 2025 Apple Inc. All rights reserved. {""}
            <a href=""> Privacy Policy</a> | <a href="">Terms of Use</a> |{" "}
            <a href="">Sales and Refunds</a> | <a href="">Legal</a> |{" "}
            <a href="">Site Map</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
