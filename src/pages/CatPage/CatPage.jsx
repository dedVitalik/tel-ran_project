import React from 'react';
import { useParams } from 'react-router-dom';
import CategoriesGrid from '../../components/CategoriesGrid/CategoriesGrid';
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid';

function CatPage() {
  const { categoryId } = useParams();

  return ((!categoryId || categoryId === 'all')
    ? <CategoriesGrid quantity={Infinity} />
    : <ProductsGrid categoryId={categoryId} isDiscountChecked={false} />
  );
}

export default CatPage;
