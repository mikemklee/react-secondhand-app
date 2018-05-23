import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const Item = ({ item }) => {
  const {
    description,
    course,
    price,
    createdAt
  } = item;
  return (
    <div className="list-item">
      <div>
        <h3 className="list-item__title">{course}</h3>
        <h3 className="list-item__subtitle">
          {description.substring(0, 50)}
        </h3>
        <p className="list-item__subtitle">
          {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
      </div>
      <h3 className="list-item__data">
        {numeral(price / 100).format('$0,0.00')}
      </h3>
    </div>
  );
};

export default Item;