import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const Layout = ({
  classes, children,
}) => (
  <div className={classes.root}>
    <Sidebar />

    <div className={classes.appContent}>
      <Header />
      <main className={classes.content}>
        {children}
      </main>
    </div>
  </div>
);

export default withStyles(styles)(Layout);
