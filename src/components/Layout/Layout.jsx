import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Layout.scss';

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <footer>
        Тут будет подвал
      </footer>
    </div>
  );
}

export default Layout;
