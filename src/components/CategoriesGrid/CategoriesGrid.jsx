import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/categories';

function CategoriesGrid() {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(categories);
  return (
    <div className="categories-grid">
      {categories.map((category) => (category.id))}
      <a className="categories-item" href="products.html">
        <div className="categories-item-img-wrapper">
          <img
            className="categories-item-img"
            src="assets/img/category-1.png"
            alt="опис фото"
          />
        </div>
        <div className="categories-item-text">Удобрения</div>
      </a>
      <a className="categories-item" href="products.html">
        <div className="categories-item-img-wrapper">
          <img
            className="categories-item-img"
            src="assets/img/category-2.png"
            alt="опис фото"
          />
        </div>
        <div className="categories-item-text">Средства Защиты и септики</div>
      </a>
      <a className="categories-item" href="products.html">
        <div className="categories-item-img-wrapper">
          <img
            className="categories-item-img"
            src="assets/img/category-3.png"
            alt="опис фото"
          />
        </div>
        <div className="categories-item-text">Посадочный материал</div>
      </a>
      <a className="categories-item" href="products.html">
        <div className="categories-item-img-wrapper">
          <img
            className="categories-item-img"
            src="assets/img/category-4.png"
            alt="опис фото"
          />
        </div>
        <div className="categories-item-text">Инструменты и Инвентарь</div>
      </a>
    </div>
  );
}

export default CategoriesGrid;
