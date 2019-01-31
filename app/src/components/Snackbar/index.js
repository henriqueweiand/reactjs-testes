import React, { Fragment, Component } from 'react';
// import PropTypes from 'prop-types';

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import SnackbarMaterial from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import SnackbarActions from '~/store/ducks/snackbar';
import styles from './styles';

class Snackbar extends Component {
  handleClose = () => {
    const { setHide } = this.props;
    setHide();
  };

  render() {
    const { classes, snackbar: { visible, message } } = this.props;

    return (
      <Fragment>
        <SnackbarMaterial
          // className={classNames(className, classes[this.props.snackbar.type])}
          open={visible}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          // variant={snackbar.type}
          variant="error"
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  snackbar: state.snackbar,
});

const mapDispatchToProps = dispatch => bindActionCreators(SnackbarActions, dispatch);

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Snackbar);
