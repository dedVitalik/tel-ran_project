import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/categories';
import { fetchGoods } from '../../store/goods';
import Loader from '../../components/Loader/Loader';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductsPage.scss';

function ProductsPage({ categoryId }) {
  const priceFrom = useRef();
  const priceTo = useRef();
  const priceWithDiscount = useRef();

  // const { productId } = useParams();
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

  const handleFilterGoods = () => {
    setFilteredSortedGoods(goods
      .filter((item) => item.price >= (priceFrom.current.value || 0)
        && item.price <= (priceTo.current.value || Infinity)
        && (priceWithDiscount.current.checked ? (item.discont_price < item.price) : true)));
  };

  const handleSortGoods = (evt) => {
    const { value } = evt.target;
    if (value === 'price') {
      setFilteredSortedGoods([...filteredSortedGoods]
        .sort((a, b) => a.price - b.price));
    } else if (value === 'title') {
      setFilteredSortedGoods([...filteredSortedGoods]
        .sort((a, b) => a.title.localeCompare(b.title)));
    } else if (value === 'id') {
      setFilteredSortedGoods([...filteredSortedGoods]
        .sort((a, b) => a.id - b.id));
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  useEffect(
    () => {
      setFilteredSortedGoods(goods);
    },
    [goods],
  );

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
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="filter-checkbox-wrapper">
              <div className="filter-title">Товары со скидкой</div>
              <div className="filter-checkbox">
                <input
                  ref={priceWithDiscount}
                  className="filter-checkbox-real visually-hidden"
                  type="checkbox"
                  onChange={handleFilterGoods}
                />
                <div className="filter-checkbox-fake" />
              </div>
            </label>
          </div>
          <div className="filter-item">
            <div className="filter-title">Сортировать:</div>
            <select className="filter-select" onChange={handleSortGoods}>
              <option value="id" defaultValue>По умолчанию</option>
              <option value="price">По цене</option>
              <option value="title">По названию</option>
            </select>
          </div>
        </div>
      </div>
      <div className="collection">
        <div className="container">
          <div className="collection-body" />
          <div className="collection-grid">
            {filteredSortedGoods.map((good) =>
              // eslint-disable-next-line react/jsx-props-no-spreading,implicit-arrow-linebreak
              <ProductCard key={good.id} {...good} />)}
          </div>
        </div>
      </div>

    </>
  );
}

export default ProductsPage;
