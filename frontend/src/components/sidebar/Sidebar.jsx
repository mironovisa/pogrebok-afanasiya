import React from "react";
import "./Sidebar.css";
import {
  cucumber,
  tomato,
  cabbage,
  mushrooms,
  patis,
  garlic,
  cherem,
  compot,
  jam,
} from "../../assets";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-heading">
          <div className="triangle-left"></div>
          <div className="sidebar-header">Чего изволите?</div>
          <div className="triangle-right"></div>
        </div>
        <div className="sidebar-categories">
          <div className="sidebar-divst-element">
            <img
              src={cucumber}
              alt="cucmber"
              className="sidebar-list-element-icon"
            />
            Огурчики
          </div>
          <div className="sidebar-divst-element">
            {" "}
            <img
              src={tomato}
              alt="tomato"
              className="sidebar-list-element-icon"
            />
            Помидорчики
          </div>
          <div className="sidebar-divst-element">
            <img
              src={cabbage}
              alt="cabbage"
              className="sidebar-list-element-icon"
            />
            Квашеная капусточка
          </div>
          {/* <div className="sidebar-divst-element">
            <img
              src={cucumber}
              alt="cucmber"
              className="sidebar-list-element-icon"
            />
            Маринованная капусточка
          </div> */}

          <div className="sidebar-divst-element">
            {" "}
            <img
              src={mushrooms}
              alt="cucmber"
              className="sidebar-list-element-icon"
            />
            Грибочки
          </div>
          <div className="sidebar-divst-element">
            {" "}
            <img
              src={patis}
              alt="patis"
              className="sidebar-list-element-icon"
            />
            Патиссончики
          </div>
          <div className="sidebar-divst-element">
            {" "}
            <img
              src={garlic}
              alt="garlic"
              className="sidebar-list-element-icon"
            />
            Чесночок{" "}
          </div>
          <div className="sidebar-divst-element">
            {" "}
            <img
              src={cherem}
              alt="cherem"
              className="sidebar-list-element-icon"
            />
            Черемша
          </div>
          <div className="sidebar-divst-element">
            {" "}
            <img
              src={compot}
              alt="compot"
              className="sidebar-list-element-icon"
            />
            Компотики{" "}
          </div>
          <div className="sidebar-divst-element">
            {" "}
            <img src={jam} alt="jam" className="sidebar-list-element-icon" />
            Домашнее варенье
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
