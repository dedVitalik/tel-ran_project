import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Page404 from '../../pages/Page404';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import CatPage from '../../pages/CatPage/CatPage';
import CartPage from '../../pages/CartPage/CartPage';
import ProdPage from '../../pages/ProdPage/ProdPage';
import ProductsGrid from '../ProductsGrid/ProductsGrid';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/categories" element={<CatPage />} />
        <Route path="/categories/:categoryId" element={<CatPage />} />
        <Route path="/products/:productId" element={<ProdPage />} />
        <Route path="/products/discounted" element={<ProductsGrid categoryId="all" isDiscountChecked />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
