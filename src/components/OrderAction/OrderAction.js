import React from 'react';

const orderAction = (props) => {
  const ingredients = Object.keys(props.ingredients).map((ingKey) => (
    <p key={ingKey} className="border p-1 mb-0">
      {ingKey}({props.ingredients[ingKey]})
    </p>
  ));
  return (
    <div className="container">
      <div className="row">
        {ingredients}
        <p className="p-1 mb-0">${props.price.toFixed(2)}</p>
      </div>
      <div className="row py-2">
        <p className="mb-0 mr-1">
          Made by: {props.name}({props.email}).
        </p>
        <p className="mb-0">
          Address: {props.address}({props.postalCode}).
        </p>
      </div>
      <div className="row">
        <button
          className="btn btn-primary btn-sm"
          onClick={props.onAcceptButtonClicked}
          disabled={props.acceptButtonDisabled}
        >
          Accept
        </button>
        <button
          className="btn btn-secondary btn-sm mx-3"
          onClick={props.onSendButtonClicked}
          disabled={props.sendButtonDisabled}
        >
          Send
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={props.onDeleteButtonClicked}
        >
          Delete
        </button>
      </div>
      <hr />
    </div>
  );
};

export default orderAction;
