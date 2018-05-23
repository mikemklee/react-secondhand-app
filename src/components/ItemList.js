import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => (
  <div>
    <div className="list-header">
      <div className="show-for-mobile">Listings</div>
      <div className="show-for-desktop">Listing</div>
      <div className="show-for-desktop">Price</div>
    </div>
    <div className="list-body">
      {
        items.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No listing.</span>
          </div>
        ) : (
            items.map(item => (
              <Item key={item.id} item={item} />
            ))
          )
      }
    </div>
  </div>
);

export default ItemList;