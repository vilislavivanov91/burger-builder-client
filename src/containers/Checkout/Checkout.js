import React, { Fragment, useState, useEffect } from 'react';
import { Route, useLocation, useHistory } from 'react-router-dom';

import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const Checkout = (props) => {
  const history = useHistory();

  const query = new URLSearchParams(useLocation().search);
  const meat = +query.get('meat');
  const bacon = +query.get('bacon');
  const cheese = +query.get('cheese');
  const salad = +query.get('salad');
  const price = +query.get('price');

  // State
  const [ingredients, setIngredients] = useState(null);
  const [burgerPrice, setBurgerPrice] = useState(null);

  useEffect(() => {
    setIngredients({
      meat,
      bacon,
      cheese,
      salad,
    });

    setBurgerPrice(price);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onContinueClicked = (e) => {
    e.preventDefault();
    history.push(history.location.pathname + '/chechout-summary');
  };

  const onCencelClicked = () => {
    history.goBack();
  };

  return burgerPrice && ingredients ? (
    <Fragment>
      <CheckoutSummary
        ingredients={ingredients}
        onContinueClicked={onContinueClicked}
        onCencelClicked={onCencelClicked}
        price={burgerPrice}
      />
      <Route path="/checkout/chechout-summary">
        <ContactData ingredients={ingredients} price={burgerPrice} />
      </Route>
    </Fragment>
  ) : null;
};

export default Checkout;
