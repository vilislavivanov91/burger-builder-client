import React from 'react';

import './Input.css';

const Input = (props) => {
  let inputElement = null;

  switch (props.inputType) {
    case 'input':
      const classes = props.invalid ? 'Input Invalid' : 'Input';
      const errorMessage = props.invalid ? <p>{props.errorMessage}</p> : null;
      inputElement = (
        <div className={classes}>
          <label className="InputLabel">{props.label}</label>
          <input
            className="InputElement"
            {...props.config}
            onChange={props.changed}
            value={props.value}
          />
          {errorMessage}
        </div>
      );
      break;
    case 'textarea':
      inputElement = <textarea />;
      break;
    case 'select':
      inputElement = (
        <div className="Input">
          <label className="InputLabel">{props.label}</label>
          <select
            className="InputElement"
            onChange={props.changed}
            value={props.value}
          >
            {props.config.options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.displayValue}
                </option>
              );
            })}
          </select>
        </div>
      );
      break;
    default:
      inputElement = <input />;
  }

  return inputElement;
};

export default Input;
