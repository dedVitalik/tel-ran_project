import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import './CartPage.scss';

function CartPage() {
  const { cart } = useSelector((state) => state.cart);

  const getSummOfCart = (cartForCalculate) => cartForCalculate
    .reduce((acc, item) => acc + item.discont_price * item.quantity, 0);

  return (
    <div className="cart">
      <div className="container">
        <div className="cart-body">
          <div className="cart-title" />
          <div className="cart-header">
            <nav className="breadcrumbs">
              <ul className="breadcrumbs-list reset-list">
                <li><Link to="/">Главная /</Link></li>
                <li>Корзина</li>
              </ul>
            </nav>
            <Link to="/categories" className="cart-back-link">
              Вернуться в магазин &gt;

            </Link>
          </div>
          <div className="cart-main">
            <div className="cart-grid">
              {
                // eslint-disable-next-line react/jsx-props-no-spreading
                cart.map((item) => <CartItem key={item.id} {...item} />)
              }
            </div>
            <div className="cart-submit">
              <div className="cart-form-wrapper">
                <h2 className="cart-form-title">Детали заказа</h2>
                <div className="cart-form-sum">
                  <div className="cart-form-sum-title">Сумма</div>
                  <div className="cart-form-sum-number">
                    {getSummOfCart(cart)}
                    <span>р</span>
                  </div>
                </div>
                <form className="cart-form" data-sd-form="validate" noValidate>
                  <div className="cart-form-input"><input type="tel" placeholder="Ваш номер телефона" required /></div>
                  <button className="cart-form-button" type="submit">Заказать</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
