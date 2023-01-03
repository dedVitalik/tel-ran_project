import React from 'react';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const getClassList = (activity) => (activity ? 'header-menu-link active' : 'header-menu-link');

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
                <NavLink
                  className={({ isActive }) => getClassList(isActive)}
                  to="/categories/all"
                >
                  Категории
                </NavLink>
              </li>
              <li className="header-menu-item"><Link to="/" className="header-menu-link">Купон</Link></li>
              <li className="header-menu-item">
                <NavLink
                  to="/products/discounted"
                  className={({ isActive }) => getClassList(isActive)}
                >
                  Акции
                </NavLink>
              </li>
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
