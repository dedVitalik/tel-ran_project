import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart';

function ProductCard({
  id, title, price, discont_price: DiscountedPrice,
}) {
  const dispatch = useDispatch();
  const getDiscountSize = (fullPrice, discountedPrice) => {
    const discountSize = (((fullPrice - discountedPrice) / fullPrice) * 100).toFixed(2);
    return discountSize;
  };

  return (
    <div className="collection-item">
      <div className="collection-item-img-wrapper">
        <img
          className="collection-item-img"
          src="/images/img-placeholder.png"
          alt={title}
        />
        <button
          onClick={() => dispatch(addToCart({
            id,
            title,
            price,
            discont_price: DiscountedPrice,
          }))}
          type="button"
          className="collection-item-cart-button"
        >
          В корзину
        </button>
      </div>
      <div className="collection-item-price-wrapper">
        <div className="collection-item-price">{Intl.NumberFormat('ru-RU').format(price)}</div>
        <div className="collection-item-prev-price">{DiscountedPrice}</div>
        <div className="collection-item-off">
          {getDiscountSize(price, DiscountedPrice)}
          %
        </div>
      </div>
      <Link to={`/products/${id}`} className="collection-item-desc">{title}</Link>
    </div>
  );
}

export default ProductCard;
