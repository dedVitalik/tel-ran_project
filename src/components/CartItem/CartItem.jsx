import React from 'react';
import './CartItem.scss';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../../store/cart';

function CartItem({
  title, price, discont_price: discountedPrice, quantity, id,
}) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <div className="cart-item-col">
        <div className="cart-item-img-wrapper">
          <img
            className="cart-item-img"
            src="/images/img-placeholder.png"
            alt={title}
          />
        </div>
      </div>
      <div className="cart-item-col">
        <div className="cart-item-title">{title}</div>
        <div className="cart-item-number">
          <button onClick={() => dispatch(decrementQuantity(id))} type="button" className="cart-item-number-dec reset-button">
            <span />
          </button>
          <input className="cart-item-number-curr" value={quantity} readOnly />
          <button onClick={() => dispatch(incrementQuantity(id))} type="button" className="cart-item-number-inc reset-button">
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className="cart-item-col">
        <div className="cart-item-price-wrapper">
          <div className="cart-item-price">
            {discountedPrice * quantity}
            <span>р</span>
          </div>
          <div className="cart-item-prev-price">
            {price * quantity}
            р
          </div>
        </div>
      </div>
      <button onClick={() => dispatch(removeItem(id))} type="button" className="cart-item-remove reset-button">
        <svg aria-hidden="true">
          <use href="#close-icon" />
        </svg>
      </button>
    </div>
  );
}

export default CartItem;
