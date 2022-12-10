import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-body">
          <a className="header-logo" href="/">
            <img
              className="header-logo-img"
              src="images/logo.png"
              alt="Home page"
            />
          </a>
          <a
            className="header-button"
            href="/"
          >
            Каталог
          </a>
          <nav className="header-menu">
            <ul className="header-menu-list reset-list">
              <li className="header-menu-item">
                <a
                  className="header-menu-link active"
                  href="/"
                >
                  Категории
                </a>
              </li>
              <li className="header-menu-item"><a className="header-menu-link" href="/">Купон</a></li>
              <li className="header-menu-item"><a className="header-menu-link" href="/">Акции</a></li>
              <li className="header-menu-item"><a className="header-menu-link" href="/">Контакты</a></li>
            </ul>
          </nav>
          <a className="cart-link" href="/">
            <img className="header-menu-icon" src="images/svg/cart.svg" alt="Basket" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
