import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = (props) => {
  return (
    <li className="NavigationItem">
      <NavLink to={props.link} activeClassName="active" exact>
        {props.children}
      </NavLink>
      {/* <a href={props.link} className={props.active ? 'active' : null}>
        {props.children}
      </a> */}
    </li>
  );
};

export default navigationItem;
