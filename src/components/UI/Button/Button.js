import React from 'react';

import './Button.css';

const button = (props) => {
  const classes = ['Button'];
  classes.push(props.type);
  return (
    <button onClick={props.onClick} className={classes.join(' ')}>
      {props.children}
    </button>
  );
};

export default button;
