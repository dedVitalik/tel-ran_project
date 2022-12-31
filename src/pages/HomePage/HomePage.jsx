import React from 'react';
// import { fetchGoods } from '../../store/goods';
// import { fetchCategories } from '../../store/categories';
// eslint-disable-next-line import/no-unresolved
import './HomePage.scss';
import CategoriesGrid from '../../components/CategoriesGrid/CategoriesGrid';

function HomePage() {
  // const dispatch = useDispatch();
  // const { categories, loading, error } = useSelector((state) => state.categories);
  //
  // useEffect(() => {
  //   dispatch(fetchCategories());
  // }, []);
  //
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  //
  // if (error) {
  //   return <div>{error}</div>;
  // }

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
          <div className="showcase-img"><img src="/images/showcase-img.png" alt="" /></div>
        </div>
      </div>

      <CategoriesGrid quantity={4} />

    </div>
  );
}

export default HomePage;
