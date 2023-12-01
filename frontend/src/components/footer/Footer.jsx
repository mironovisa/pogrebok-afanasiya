import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <div className="footer-column-header">О нас</div>
            <div className="footer-column-ul">
              <div>Сертификаты</div>
              <div>Благодарственные письма</div>
              <div>Наше производство</div>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-column-header">Важные ссылки</div>
            <div className="footer-column-ul">
              <div>Доставка</div>
              <div>Оплата</div>
              <div>Контакты</div>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-column-header">Свяжитесь с нами!</div>
            <div className="footer-column-ul">
              <div>Telegram</div>
              <div>WhatsApp</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
