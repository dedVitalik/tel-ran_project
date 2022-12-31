import React from 'react';
import { useParams } from 'react-router-dom';
import CategoriesGrid from '../../components/CategoriesGrid/CategoriesGrid';
import ProductsPage from '../ProductsPage/ProductsPage';

function CatPage() {
  const { categoryId } = useParams();

  return (!categoryId
    ? <CategoriesGrid quantity={Infinity} />
    : <ProductsPage categoryId={categoryId} />
  );
}

export default CatPage;
