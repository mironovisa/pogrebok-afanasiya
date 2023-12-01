import React from "react";
import "./HomepageItemsWidget.css";
import ItemCard from "../item-card/ItemCard";
const HomepageItemsWidget = () => {
  const arrayLove = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="homepage-items-widget">
      <div className="homepage-items-widget-container">
        <div className="homepage-items-widget-row">
          {arrayLove.map((i) => (
            <div key={i}>
              <ItemCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageItemsWidget;
