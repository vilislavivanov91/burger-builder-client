import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery';
import {
  addIngredient,
  removeIngredient,
} from '../../actions/burgerActionCreator';

const BurgerBuilder = (props) => {
  // Setting history
  const history = useHistory();
  // State
  const [displayModal, setDisplayModal] = useState(false);

  const ingredientAvailability = (ingredient) => {
    return props.ingredients[ingredient] > 0;
  };
  const handleDisplayModal = () => {
    setDisplayModal(true);
  };

  const hideModal = () => {
    setDisplayModal(false);
  };

  const continueToCheckout = () => {
    const queryArr = [];
    for (let ing in props.ingredients) {
      const ingredientString = `${encodeURI(ing)}=${encodeURI(
        props.ingredients[ing]
      )}`;
      queryArr.push(ingredientString);
    }
    queryArr.push('price=' + props.price);

    const queryStr = queryArr.join('&');

    history.push({
      pathname: '/checkout',
      search: '?' + queryStr,
    });
  };

  return (
    <Fragment>
      <Modal show={displayModal} onClick={hideModal}>
        <OrderSummery
          ingredients={props.ingredients}
          price={props.price}
          onCancelClicked={hideModal}
          onContinueClicked={continueToCheckout}
        />
      </Modal>
      <Burger ingredients={props.ingredients} />
      <BuildControls
        price={props.price}
        addIngredients={props.addIngredient}
        removeIngredients={props.removeIngredient}
        ingredientAvailability={ingredientAvailability}
        disableOrderButton={props.ingredientsAvailability}
        onOrderClicked={handleDisplayModal}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    price: state.price,
    ingredientsAvailability: state.ingredientsAvailability,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (ing) => dispatch(addIngredient(ing)),
    removeIngredient: (ing) => dispatch(removeIngredient(ing)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
