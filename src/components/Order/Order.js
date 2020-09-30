import React from 'react';
import './Order.css';

const order = (props) => {
  const ingredients = Object.keys(props.ingredients).map((ingKey) => (
    <p key={ingKey}>
      {ingKey}({props.ingredients[ingKey]})
    </p>
  ));
  return (
    <div className="Order">
      {ingredients}
      <p>
        <strong>${props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
