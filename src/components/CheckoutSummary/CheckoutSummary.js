import React from 'react';

import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import Spinner from '../UI/Spinner/Spinner';
import './CheckoutSummary.css';

const checkoutSummary = (props) => {
  let burger = <Spinner />;

  if (props.ingredients) {
    burger = <Burger ingredients={props.ingredients} />;
  }

  return (
    <div className="CheckoutSummary">
      {burger}
      <h4>Hope you like your burger</h4>
      <p>
        Price: <strong>${props.price.toFixed(2)}</strong>
      </p>
      <Button type="Success" onClick={props.onContinueClicked}>
        CONTINUE
      </Button>
      <Button type="Danger" onClick={props.onCencelClicked}>
        CENCEL
      </Button>
    </div>
  );
};

export default checkoutSummary;
