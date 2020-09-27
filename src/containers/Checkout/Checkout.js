import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import CheckoutSummery from '../../components/CheckoutSummery/CheckoutSummery';

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

  useEffect(() => {
    setIngredients({
      meat,
      bacon,
      cheese,
      salad,
    });
  }, [meat, bacon, cheese, salad]);

  const onContinueClicked = () => {
    history.push('/chechout-summery');
  };

  const onCencelClicked = () => {
    history.goBack();
  };

  return (
    <CheckoutSummery
      ingredients={ingredients}
      onContinueClicked={onContinueClicked}
      onCencelClicked={onCencelClicked}
      price={price}
    />
  );
};

export default Checkout;
