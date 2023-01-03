import React from 'react';
import './Promo.scss';

function Promo() {
  return (
    <div className="promo">
      <div className="container">
        <div className="promo-body">
          <img className="promo-img" src="/images/gnome.png" alt="Promo-gnome" />
          <div className="promo-info">
            <h2 className="promo-title">
              <span>Скидка 5%</span>
              <span> на первый заказ</span>
            </h2>
            <form className="promo-form" data-sd-form="validate" noValidate="">
              <div className="promo-form-input">
                <input type="tel" name="user_phone" placeholder="+38" required />
              </div>
              <button className="promo-form-button" type="submit">Получить скидку</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promo;
