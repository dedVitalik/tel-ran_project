import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Page404 from '../../pages/Page404';
import Contacts from '../../pages/Contacts';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import CatPage from '../../pages/CatPage/CatPage';
import OneProductPage from '../../pages/OneProductPage/OneProductPage';
import CartPage from '../../pages/CartPage/CartPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/categories" element={<CatPage />} />
        <Route path="/categories/:categoryId" element={<CatPage />} />
        <Route path="/products/:productId" element={<OneProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
