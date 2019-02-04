import React, { Fragment, Component } from 'react';
import { compose } from 'recompose';
// import PropTypes from 'prop-types';

import { Drawer, MenuList, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import DateRange from '@material-ui/icons/DateRange';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { styles } from './styles';

class Sidebar extends Component {
  static defaultProps = {
    title: '',
  };

  render() {
    const {
      classes,
    } = this.props;

    return (
      <Fragment>
        <Drawer
          open={false}
          onClose={() => {}}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => {}}>
              <ChevronLeftIcon />
            </IconButton>
          </div>

          <MenuList>
            <MenuItem component="Agenda" to="/agenda" selected={false} onClick={() => {}}>
              <ListItemIcon>
                <DateRange />
              </ListItemIcon>
              <ListItemText inset primary="Teste" />
            </MenuItem>

            <MenuItem
              onClick={() => {}}
            >
              <ListItemIcon>
                <PowerSettingsNew />
              </ListItemIcon>
              <ListItemText inset primary="Sair" />
            </MenuItem>
          </MenuList>
        </Drawer>
      </Fragment>
    );
  }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  withWidth(),
)(Sidebar);
