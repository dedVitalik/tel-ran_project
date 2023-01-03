import React from 'react';
import CategoriesGrid from '../../components/CategoriesGrid/CategoriesGrid';
import Promo from '../../components/Promo/Promo';
import DiscountProdGrid from '../../components/DiscountProdGrid/DiscountProdGrid';
import Showcase from '../../components/Showcase/Showcase';

function HomePage() {
  return (
    <>
      <Showcase />
      <CategoriesGrid quantity={4} />
      <Promo />
      <DiscountProdGrid />
    </>
  );
}

export default HomePage;
