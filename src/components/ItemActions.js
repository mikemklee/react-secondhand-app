import React from 'react';

export const ItemActions = () => {
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Trading used textbooks, made simple.</h1>
        <div className="input-group">
          <div className="input-group__item">
            <span><i class="fas fa-search"></i></span>
            <input
              type="text"
              className="text-input"
              placeholder="Search listings"
            />
          </div>
          <div className="input-group__item">
            <span><i class="far fa-edit"></i></span>
            <button className="button">Add Listing</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemActions;