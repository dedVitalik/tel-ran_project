import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer-body">
          <div className="footer-col">
            <h2 className="footer-title">Контакты</h2>
            <a className="footer-tel" href="tel:+79999999999">
              +49 999 99 999
            </a>
            <div className="footer-social">
              <a className="footer-social-item" href="https://instagram.com">
                <svg aria-hidden="true">
                  <use href="#instagram-icon" />
                </svg>
                <span>instagram</span>
              </a>
              <a className="footer-social-item" href="https://wa.com">
                <svg aria-hidden="true">
                  <use href="#whatsapp-icon" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h2 className="footer-title">Адрес</h2>
            <address className="footer-address">г. Космонавтов проезд Космонавтов, д.11</address>
            <div className="footer-subtitle">Режим работы</div>
            <div className="footer-schedule">Круглосуточно</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
