import React, { useEffect, useState } from 'react';
import './OneProductPage.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGood } from '../../store/good';
import Loader from '../../components/Loader/Loader';
import getDiscountSize from '../../utils/utils';
import { addToCart } from '../../store/cart';

function OneProductPage() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { good, error, loading } = useSelector((state) => state.good);
  const [currentGood, setCurrentGood] = useState(null);

  useEffect(() => {
    dispatch(fetchGood(productId));
  }, []);

  useEffect(
    () => {
      setCurrentGood(good[0]);
    },
    [good],
  );

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="item">
      <div className="container">
        <div className="item-body">
          <h1 className="item-title">{currentGood?.title}</h1>
          <div className="item-main">
            <img className="item-img" src="/images/img-placeholder-big.jpg" alt={currentGood?.title} />
            <div className="item-info">
              <div className="item-price-wrapper">
                <div className="item-price">
                  {currentGood?.price}
                  <span>p</span>
                </div>
                <div className="item-prev-price">
                  {currentGood?.discont_price}
                  р
                </div>
                <div className="item-off">
                  -
                  {getDiscountSize(currentGood?.price, currentGood?.discont_price)}
                  %
                </div>
              </div>
              <button
                onClick={() => dispatch(addToCart({
                  id: currentGood?.id,
                  title: currentGood?.title,
                  price: currentGood?.price,
                  discont_price: currentGood?.discont_price,
                }))}
                type="button"
                className="item-button reset-button"
              >
                В корзину
              </button>
              <div className="item-desc">
                <h2 className="item-desc-title">Описание</h2>
                <div className="item-desc-text">
                  <div>{currentGood?.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneProductPage;
