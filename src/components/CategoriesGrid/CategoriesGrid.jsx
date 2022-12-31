import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../../store/categories';
import CategoryCard from '../CategoryCard/CategoryCard';
import './CategoriesGrid.scss';
import Loader from '../Loader/Loader';

function CategoriesGrid({ quantity }) {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="categories">
      <div className="container">
        <div className="categories-body">
          <div className="section-title-wrapper">
            <h2 className="section-title">Категории</h2>
            <Link
              to="/categories"
              className="section-title-button"
            >
              Все категории
            </Link>
          </div>
          <div className="categories-grid">
            {categories
              .slice(0, quantity)
              .map((category) => (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  title={category.title}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesGrid;
