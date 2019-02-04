import React, { Fragment } from 'react';

import { compose } from 'recompose';
import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';

import styles from './styles';

const Header = ({
  classes,
}) => (
  <Fragment>
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => {}}
          className={classes.navIconHide}
        >
          <Menu />
        </IconButton>

        <Typography variant="subheading" color="inherit">teste</Typography>
      </Toolbar>

    </AppBar>
  </Fragment>
);

export default compose(
  withStyles(styles, { withTheme: true }),
)(Header);
