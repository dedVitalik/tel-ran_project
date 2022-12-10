import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BallTriangle } from 'react-loader-spinner';
import { fetchGoods } from '../../store/goods';
// eslint-disable-next-line import/no-unresolved
import './HomePage.scss';
import CategoriesGrid from '../../components/CategoriesGrid/CategoriesGrid';

function HomePage() {
  const dispatch = useDispatch();
  const { goods, loading, error } = useSelector((state) => state.goods);

  useEffect(() => {
    dispatch(fetchGoods());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log(goods);
  return (
    <div>
      <div className="showcase">
        <div className="showcase-text">
          <h1 className="showcase-title">
            <span>Распродажа</span>
            <span> в честь нового сезона</span>
          </h1>
          <div className="showcase-button-wrapper">
            <a className="showcase-button" href="/">Все акции</a>
            <a
              className="showcase-button showcase-button-alt"
              href="/"
            >
              Подробнее
            </a>
          </div>
        </div>
        <div className="showcase-img-wrapper">
          <div className="showcase-img"><img src="./images/showcase-img.png" alt="" /></div>
        </div>
      </div>

      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible
      />

      <div className="categories" id="categories">
        <div className="container">
          <div className="categories-body">
            <div className="section-title-wrapper">
              <h2 className="section-title">Категории</h2>
              <a
                className="section-title-button"
                href="categories.html"
              >
                Все категории
              </a>
            </div>
            <CategoriesGrid />
          </div>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
