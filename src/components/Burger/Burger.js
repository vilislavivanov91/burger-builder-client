import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

const burger = (props) => {
  let ingredients = Object.keys(props.ingredients)
    .map((ingKey, i) =>
      [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredient key={ingKey + i} type={ingKey} />;
      })
    )
    .reduce((prevValue, value) => {
      return prevValue.concat(value);
    }, []);

  if (ingredients.length === 0) {
    ingredients = <p>Please add ingredients</p>;
  }

  return (
    <div className="Burger">
      <BurgerIngredient type="breadTop" />
      {ingredients}
      <BurgerIngredient type="breadBottom" />
    </div>
  );
};

export default burger;
