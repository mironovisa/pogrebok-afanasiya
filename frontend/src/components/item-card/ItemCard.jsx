import React from "react";
import "./ItemCard.css";
import { berlin } from "../../assets";
const ItemCard = () => {
  return (
    <div className="item-card">
      <div className="item-card-container">
        <img src={berlin} alt="" />
        <div className="item-name">Огурчики по-берлински</div>
        <div className="item-desc">
          Огуричики по-берински это сочное сочетание горчицы, душистого перчика
          и лаврушки. Приторно-сладкий рассол, в каждом укусе огурца будет
          чувстоваться!
        </div>
        <div className="item-volume">
          <span>Объем банки:</span> 2.7л
        </div>
        <div className="item-volume">
          <span>Вес:</span> 2.8кг
        </div>
        <div className="item-amount-left">
          <span>Осталось:</span> 28 баночек
        </div>
        <div className="item-price">
          <span>Цена:</span> 420 рублей
        </div>
        <div className="item-renewal">
          <span>Новая партия ожидается:</span> 28.01.2024
        </div>
        <button className="order-item-btn">Добавить в авоську!</button>
      </div>
    </div>
  );
};

export default ItemCard;
