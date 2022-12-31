import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-body">
          <Link to="/" className="header-logo">
            <img
              className="header-logo-img"
              src="/images/logo.png"
              alt="Home page"
            />
          </Link>
          <Link
            to="/products/all"
            className="header-button"
          >
            Каталог
          </Link>
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
          <Link to="/cart" className="cart-link">
            <img className="header-menu-icon" src="/images/svg/cart.svg" alt="basket" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
