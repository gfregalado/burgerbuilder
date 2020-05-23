import React from 'react';

import classes from './layout.module.css';

const layout = (props) => (
  <React.Fragment>
    <div> Toolbar, SideDrawers, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </React.Fragment>
);

export default layout;
