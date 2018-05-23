import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Item item={item}>
            <button>
              Add to MyList
            </button>
          </Item>
        </li>
      ))}
    </ul>
  )
}

export default ItemList;