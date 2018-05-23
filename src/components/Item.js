import React from 'react';

const Item = ({ item, children }) => (
  <div>
    <div>
      {item.user}
      {item.description}
      {item.course}
      {item.price}
      {item.note}
    </div>
    <div>
      {children}
    </div>
  </div>
);

export default Item;