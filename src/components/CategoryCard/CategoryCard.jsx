import React, { useEffect, useState } from 'react';
import './CategoryCard.scss';
import { Link } from 'react-router-dom';

function CategoryCard({ id, title }) {
  const [imgUrl, setImgUrl] = useState('/images/cat-placeholder.png');

  useEffect(() => {
    fetch(`${window.location.origin}/images/category-${id}.png`)
      .then((response) => {
        if (response.headers.get('content-type') === 'image/png') {
          setImgUrl(`/images/category-${id}.png`);
        }
      });
  }, []);

  return (
    <Link className="categories-item" to={`/categories/${id}`}>
      <div className="categories-item-img-wrapper">
        <img
          className="categories-item-img"
          src={imgUrl}
          alt={title}
        />
      </div>
      <div className="categories-item-text">{title}</div>
    </Link>
  );
}

export default CategoryCard;
