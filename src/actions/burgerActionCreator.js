import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  CLEAR_BURGER,
} from './burgerActionTypes';

export const addIngredient = (ingredient) => {
  return {
    type: ADD_INGREDIENT,
    ingredeintType: ingredient,
  };
};

export const removeIngredient = (ingredient) => {
  return {
    type: REMOVE_INGREDIENT,
    ingredeintType: ingredient,
  };
};

export const clearBurger = () => {
  return {
    type: CLEAR_BURGER,
  };
};
