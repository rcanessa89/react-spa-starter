import logo from '@img/logo.svg'
import * as React from 'react';
import './header.css';

const Header: React.SFC = () => (
  <header className="app-header">
    <img src={logo} className="app-header__logo" alt="logo" />
    <h1 className="app-header__title">Welcome to React</h1>
  </header>
);

export default Header;
