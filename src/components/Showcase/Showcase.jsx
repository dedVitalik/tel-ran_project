import React from 'react';
import './Showcase.scss';
import { Link } from 'react-router-dom';

function Showcase() {
  return (
    <div className="showcase">
      <div className="container">
        <div className="showcase-body">
          <div className="showcase-text">
            <h1 className="showcase-title">
              <span>Распродажа</span>
              <span> в честь нового сезона</span>
            </h1>
            <div className="showcase-button-wrapper">
              <Link to="/products/discounted" className="showcase-button">Все акции</Link>
              <Link
                to="/products/discounted"
                className="showcase-button showcase-button-alt"
              >
                Подробнее
              </Link>
            </div>
          </div>
          <div className="showcase-img-wrapper">
            <div className="showcase-img">
              <img src="/images/showcase.png" alt="Your Garden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
