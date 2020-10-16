import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import withErrorHandler from '../../hoc/withErrorHandler';
import axios from '../../axios';

import OrderAction from '../../components/OrderAction/OrderAction';
import { initiateAdminOrdersAsync } from '../../actions/orderActionCreator';

const AdminDashboard = (props) => {
  useEffect(() => {
    props.initOrders();
  }, []);
  const dispayOrders = props.orders.map((order) => {
    return (
      <OrderAction
        key={order.id}
        ingredients={order.ingredients}
        name={order.name}
        email={order.email}
        address={order.address}
        postalCode={order.postalCode}
        price={order.price}
      />
    );
  });
  return <div className="d-flex">{dispayOrders}</div>;
};

const mapStateToprops = (state) => ({
  orders: state.order.orders,
});

const mapDispatchToProps = (dispatch) => ({
  initOrders: () => dispatch(initiateAdminOrdersAsync()),
});

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(withErrorHandler(AdminDashboard, axios));
