import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
];

const buildControls = (props) => {
  return (
    <div className="BuildControls">
      <p>${props.price.toFixed(2)}</p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            onMoreClick={() => props.addIngredients(ctrl.type)}
            onLessClick={() => props.removeIngredients(ctrl.type)}
            disabled={!props.ingredientAvailability(ctrl.type)}
          />
        );
      })}
      <button
        className="OrderButton"
        disabled={!props.disableOrderButton}
        onClick={props.onOrderClicked}
      >
        Order Now
      </button>
    </div>
  );
};

export default buildControls;
