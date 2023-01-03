import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/categories';
import { fetchGoods } from '../../store/goods';
import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';
import { sortGoods } from '../../utils/utils';
import './ProductsGrid.scss';

function ProductsGrid({ categoryId, isDiscountChecked }) {
  const [onlyWithDiscount, setOnlyWithDiscount] = useState(isDiscountChecked);
  const priceFrom = useRef();
  const priceTo = useRef();
  const priceWithDiscount = useRef();
  const sortBy = useRef();

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { goods, error, loading } = useSelector((state) => state.goods);
  const [currentCategoryName, setCurrentCategoryName] = useState(null);
  const [filteredSortedGoods, setFilteredSortedGoods] = useState(goods);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGoods(categoryId));
  }, []);

  useEffect(() => {
    const activeCategory = (categories.find((category) => category.id === +categoryId));
    if (activeCategory) {
      setCurrentCategoryName(activeCategory.title);
    }
  }, [categories]);

  useEffect(
    () => {
      setFilteredSortedGoods(sortGoods(goods));
    },
    [goods],
  );

  const handleSortGoods = () => {
    setFilteredSortedGoods(sortGoods(filteredSortedGoods, sortBy.current.value));
  };

  const handleFilterGoods = (evt) => {
    if (evt.target === priceWithDiscount.current) {
      setOnlyWithDiscount(!onlyWithDiscount);
    }
    setFilteredSortedGoods(sortGoods(goods
      .filter((item) => item.price >= (priceFrom.current.value || 0)
        && item.price <= (priceTo.current.value || Infinity)
        && (priceWithDiscount.current.checked
          ? (item.discont_price < item.price)
          : true)), sortBy.current.value));
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="container">
        <h1 className="page-title">{currentCategoryName}</h1>
      </div>
      <div className="container">
        <div className="filter">
          <div className="filter-item">
            <div className="filter-title">Цена</div>
            <div className="filter-range">
              <div className="filter-input">
                <input
                  ref={priceFrom}
                  type="number"
                  name="from"
                  placeholder="from"
                  onChange={handleFilterGoods}
                />
              </div>
              <div className="filter-input">
                <input
                  ref={priceTo}
                  type="number"
                  name="to"
                  placeholder="to"
                  onChange={handleFilterGoods}
                />
              </div>
            </div>
          </div>
          <div className="filter-item">
            <label className="filter-checkbox-wrapper">
              <div className="filter-title">Товары со скидкой</div>
              <div className="filter-checkbox">
                <input
                  ref={priceWithDiscount}
                  className="filter-checkbox-real visually-hidden"
                  type="checkbox"
                  onChange={handleFilterGoods}
                  checked={onlyWithDiscount}
                />
                <div className="filter-checkbox-fake" />
              </div>
            </label>
          </div>
          <div className="filter-item">
            <div className="filter-title">Сортировать:</div>
            <select ref={sortBy} className="filter-select" onChange={handleSortGoods} defaultValue="id">
              <option value="id">По умолчанию</option>
              <option value="price" defaultValue>По цене</option>
              <option value="title">По названию</option>
            </select>
          </div>
        </div>
      </div>
      <div className="collection">
        <div className="container">
          <div className="collection-body" />
          <div className="collection-grid">
            {filteredSortedGoods.map((good) => <ProductCard key={good.id} {...good} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsGrid;
