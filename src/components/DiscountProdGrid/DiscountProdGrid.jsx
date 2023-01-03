import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import Loader from '../Loader/Loader';
import { fetchGoods } from '../../store/goods';
import getDiscountSize from '../../utils/utils';

function DiscountProdGrid() {
  const { goods, error, loading } = useSelector((state) => state.goods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoods('all'));
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <Loader />;
  }

  const topDiscountGoods = [...goods]
    .filter((item) => item.discont_price < item.price)
    // eslint-disable-next-line max-len
    .sort((a, b) => getDiscountSize(b.price, b.discont_price) - getDiscountSize(a.price, a.discont_price))
    .slice(0, 4);

  return (
    <div className="collection" id="off">
      <div className="container">
        <div className="collection-body">
          <div className="section-title-wrapper"><h2 className="section-title">Акции</h2></div>
        </div>
        <div className="collection-grid">
          {topDiscountGoods.map((good) => <ProductCard key={good.id} {...good} />)}
        </div>
      </div>
    </div>

  );
}

export default DiscountProdGrid;
