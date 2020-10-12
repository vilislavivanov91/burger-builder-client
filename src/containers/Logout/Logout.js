import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logout } from '../../actions/authActionCreator';

const Logout = (props) => {
  const history = useHistory();
  useEffect(() => {
    props.logout();
    history.push('/');
  });
  return null;
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Logout);
