import React, { Fragment, useState } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery';

const prices = {
  meat: 0.6,
  cheese: 0.4,
  salad: 0.3,
  bacon: 0.5,
};

const BurgerBuilder = (props) => {
  // State
  const [ingredients, setIngredients] = useState({
    meat: 0,
    cheese: 0,
    salad: 0,
    bacon: 0,
  });
  const [price, setPrice] = useState(0.7);
  const [displayModal, setDisplayModal] = useState(false);

  // Handleling functions
  const addIngredients = (type) => {
    const newIngredients = {
      ...ingredients,
      [type]: ingredients[type] + 1,
    };
    const newPrice = price + prices[type];

    setIngredients(newIngredients);
    setPrice(newPrice);
  };

  const removeIngredients = (type) => {
    const newIngredients = {
      ...ingredients,
      [type]: ingredients[type] > 0 ? ingredients[type] - 1 : 0,
    };
    const newPrice = ingredients[type] > 0 ? price - prices[type] : 0;

    setIngredients(newIngredients);
    setPrice(newPrice);
  };

  const ingredientAvailability = (ingredient) => {
    return ingredients[ingredient] > 0;
  };

  const disableOrderButton = () => {
    const ingredientsCount = Object.values(ingredients).reduce(
      (prevValue, value) => {
        return prevValue + value;
      },
      0
    );

    return ingredientsCount === 0;
  };

  const handleDisplayModal = () => {
    setDisplayModal(true);
  };

  const hideModal = () => {
    setDisplayModal(false);
  };

  const ordered = () => {
    alert('WOHOO');
  };

  return (
    <Fragment>
      {displayModal ? (
        <Fragment>
          <Modal>
            <OrderSummery
              ingredients={ingredients}
              price={price}
              onCancelClicked={hideModal}
              onContinueClicked={ordered}
            />
          </Modal>
          <Backdrop onBackdropClicked={hideModal} show={displayModal} />
        </Fragment>
      ) : null}
      <Burger ingredients={ingredients} />
      <BuildControls
        price={price}
        addIngredients={addIngredients}
        removeIngredients={removeIngredients}
        ingredientAvailability={ingredientAvailability}
        disableOrderButton={disableOrderButton()}
        onOrderClicked={handleDisplayModal}
      />
    </Fragment>
  );
};

export default BurgerBuilder;
