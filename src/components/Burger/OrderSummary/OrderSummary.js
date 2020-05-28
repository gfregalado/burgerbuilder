import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const indredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burguer with the following ingredients:</p>
      <ul>{indredientSummary}</ul>
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default orderSummary;
