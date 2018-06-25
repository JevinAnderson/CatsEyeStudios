import React from 'react';

import './header.scss';

const Header = () => (
  <div className="header">
    <h1 className="header__main center">CATRIONA SIMENTAL</h1>
    <h2 className="header__secondary center">CAT'S EYE STUDIOS, LLC</h2>
    <div className="header__brief__contact">
      <div className="header__brief__contact__row">
        <a href="tel:602.345.1740">602.345.1740</a>
      </div>
      <div className="header__brief__contact__row">Signal Butte & Broadway</div>
      <div className="header__brief__contact__row">Mesa, AZ</div>
    </div>
  </div>
);

export default Header;
