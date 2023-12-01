import React from "react";
import "./HomepageBody.css";
import Sidebar from "../sidebar/Sidebar";
import HomepageItemsWidget from "../homepageitemswidget/HomepageItemsWidget";
const HomepageBody = () => {
  return (
    <div className="homepage-body">
      <div className="homepagebody-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="mainframe-container">
          <div className="homepagebody-text">
            Домашние деревенские заготовочки от Дедушки Афанасия - это только
            натуральные продукты, никакой химии. С самой трепетной заботой о
            вашем удовольствии - большая семья Дедушки Афанасия помогает ему
            круглый год радовать вас. У нас вы можете купить соленья, соленые
            огурчики или помидорчики по дедушкиным рецептам, а мы доставим
            соленья прямо к вам домой!
            <br />
            Ну а будете у нас в Тверской Губернии - не забудьте приехать нас
            проведать в деревню Юрьево!{" "}
          </div>
          <div className="sorting-homepage">
            <select>
              <option>По цене от меньшей к большей</option>
              <option>По цене от большей к меньшей</option>
              <option>По дате добавления</option>
            </select>
          </div>
          <div className="market-window">
            <HomepageItemsWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageBody;
