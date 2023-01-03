import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid';
import OneProduct from '../../components/OneProduct/OneProduct';

function ProdPage() {
  const { productId } = useParams();
  return (productId === 'all'
    ? <ProductsGrid categoryId={productId} isDiscountChecked={false} />
    : <OneProduct productId={productId} />
  );
}

export default ProdPage;
