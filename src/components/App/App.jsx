import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Page404 from '../../pages/Page404';
import Contacts from '../../pages/Contacts';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
