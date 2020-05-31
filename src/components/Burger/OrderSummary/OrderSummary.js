import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.module.css';

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
      <span>Total Price: ${props.price.toFixed(2)}</span>
      <p style={{ fontSize: '20px', paddingTop: '20px' }}>
        Continue to Checkout?
      </p>
      <div className={classes.ButtonBox}>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>
          CONTINUE
        </Button>
      </div>
    </React.Fragment>
  );
};

export default orderSummary;
