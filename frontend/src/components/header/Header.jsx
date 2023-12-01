import React from "react";
import "./Header.css";
import { logo } from "../../assets";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="header-links-container">
          <div className="catalog-link">
            <a href="" className="header-link">
              <MenuIcon
                style={{ opacity: 0.5 }}
                className="catalog-menu-icon"
              />
              Каталог
            </a>
          </div>
          <div className="dostavka-link">
            <a href="" className="header-link">
              Доставка
            </a>
          </div>
          <div className="oplata-link">
            <a href="" className="header-link">
              Оплата
            </a>
          </div>
          <div className="contacts-link">
            <a href="" className="header-link">
              Личный кабинет
            </a>
          </div>
        </div>
        <div className="lets-chat-header-links">
          <div className="chat-buttons">
            <div className="telegram-chat">
              <button className="telegram-chat-button">
                Заказать в
                <TelegramIcon
                  style={{
                    color: "white",

                    borderRadius: "45%",
                  }}
                />
              </button>
            </div>
            <div className="whatsapp-chat">
              <button className="whatsapp-chat-button">
                Заказать в
                <WhatsAppIcon
                  style={{
                    color: "white",
                    borderRadius: "45%",
                  }}
                />
              </button>
            </div>
            <div className="phone-call">
              <button className="phone-call-button">
                Заказать по
                <PhoneForwardedIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
