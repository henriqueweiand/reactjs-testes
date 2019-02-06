import React from 'react';
// import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const Layout = ({
  classes, children, sidebar, header,
}) => (
  <div className={classes.root}>
    {sidebar && <Sidebar />}

    <div className={classes.appContent}>
      {sidebar && <Header />}
      <main className={classes.content}>
        {children}
      </main>
    </div>
  </div>
);

Layout.defaultProps = {
  sidebar: true,
  header: true,
};

export default withStyles(styles, { withTheme: true })(Layout);
