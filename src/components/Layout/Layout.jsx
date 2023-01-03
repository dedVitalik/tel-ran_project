import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Layout.scss';
import Footer from '../Footer/Footer';

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
