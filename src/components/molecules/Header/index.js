import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <nav className="header">
      <p className="logo-app">MERN-Blog</p>
      <p className="menu-item">logout</p>
    </nav>
  );
};

export default Header;
