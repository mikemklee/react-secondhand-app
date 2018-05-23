import React from 'react';

export const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <div className="header__title">
          <h1><i className="fab fa-angellist"></i> SecondHand</h1>
        </div>
        <button className="button button--link">Logout</button>
      </div>
    </div>
  </header>
);

export default Header;