import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Rouse Accesorios</h1>
      <Link to="/cart" className="header-cart-icon">
        <i className="fas fa-shopping-cart"></i>
      </Link>
    </header>
  );
};

export default Header;
