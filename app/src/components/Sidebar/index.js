import React, { Fragment, Component } from 'react';
import { compose } from 'recompose';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { Drawer, MenuList, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import DateRange from '@material-ui/icons/DateRange';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { Creators as SideBarActions } from '~/store/ducks/sidebar';

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
          open={this.props.sidebar.status}
          onClose={() => {
            this.props.setClose();
          }}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => this.props.setClose()}>
              <ChevronLeftIcon />
            </IconButton>
          </div>

          <MenuList>
            <MenuItem component={Link} to="/lesson" selected={false} onClick={() => this.props.setClose()}>
              <ListItemIcon>
                <DateRange />
              </ListItemIcon>
              <ListItemText inset primary="Principal" />
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

const mapStateToProps = state => ({
  sidebar: state.sidebar,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...SideBarActions }, dispatch);

export default compose(
  withStyles(styles, { withTheme: true }),
  withWidth(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Sidebar);
