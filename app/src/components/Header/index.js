import React, { Fragment } from 'react';

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';

import { Creators as SideBarActions } from '~/store/ducks/sidebar';

import styles from './styles';

const Header = ({
  classes, setToggle,
}) => (
  <Fragment>
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => {
            setToggle();
          }}
          className={classes.navIconHide}
        >
          <Menu />
        </IconButton>

        <Typography variant="subheading" color="inherit">teste</Typography>
      </Toolbar>

    </AppBar>
  </Fragment>
);

const mapDispatchToProps = dispatch => bindActionCreators(SideBarActions, dispatch);

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(
    null,
    mapDispatchToProps,
  ),
)(Header);
