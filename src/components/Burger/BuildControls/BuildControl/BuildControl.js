import React from 'react';

import './BuildControl.css';

const buildControl = (props) => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button className="More" onClick={props.onMoreClick}>
        More
      </button>
      <button
        className="Less"
        onClick={props.onLessClick}
        disabled={props.disabled}
      >
        Less
      </button>
    </div>
  );
};

export default buildControl;
