import React from 'react';

import burgerLogo from '../../assets/Logo/original.png';
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="burguer-logo" />
  </div>
);

export default logo;
