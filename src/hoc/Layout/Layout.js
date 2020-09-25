import React, { Fragment } from 'react';

const layout = (props) => {
  return (
    <Fragment>
      Navigation, Sidedrawer, Backdrop
      <main>{props.children}</main>
    </Fragment>
  );
};

export default layout;
