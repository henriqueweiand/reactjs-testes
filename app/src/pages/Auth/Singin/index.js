import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import { compose } from 'recompose';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Creators from '~/store/ducks/auth';

import styles from './styles';

class Singin extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  requestLogin = () => {
    this.props.signInRequest(this.state.email, this.state.password);
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        <Card md="true">
          {this.props.auth.loading ? <LinearProgress /> : ''}
          <form className={classes.container} noValidate autoComplete="off">
            <CardContent className={classes.cardContent}>
              <TextField
                fullWidth
                id="email"
                label="email"
                value={this.state.email}
                onChange={this.handleChange('email')}
                margin="normal"
              />
              <TextField
                fullWidth
                type="password"
                id="password"
                label="Password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                margin="normal"
              />
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  this.requestLogin();
                }}
              >
                Login
              </Button>
            </CardActions>
          </form>
        </Card>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Singin);
