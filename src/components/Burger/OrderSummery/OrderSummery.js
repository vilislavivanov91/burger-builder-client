import React, { Fragment } from 'react';

import Button from '../../UI/Button/Button';

const orderSummery = (props) => {
  const ingredientsList = Object.keys(props.ingredients).map((igKey, i) => {
    return (
      <li key={igKey + i}>
        {igKey} - {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsList}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <Button type="Success" onClick={props.onContinueClicked}>
        Continue
      </Button>
      <Button type="Danger" onClick={props.onCancelClicked}>
        Cencel
      </Button>
    </Fragment>
  );
};

export default orderSummery;
