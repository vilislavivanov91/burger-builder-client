import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logout } from '../../actions/authActionCreator';
import { clearBurger } from '../../actions/burgerActionCreator';
import { clearOrders } from '../../actions/orderActionCreator';

const Logout = (props) => {
  const history = useHistory();
  useEffect(() => {
    props.logout();
    props.clearBurger();
    props.clearOrders();
    history.push('/');
  });
  return null;
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  clearBurger: () => dispatch(clearBurger()),
  clearOrders: () => dispatch(clearOrders()),
});

export default connect(null, mapDispatchToProps)(Logout);
