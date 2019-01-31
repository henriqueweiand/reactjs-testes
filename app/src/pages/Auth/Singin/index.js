import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import Creators from '~/store/ducks/auth';

import styles from './styles';

class Singin extends Component {
  static propTypes = {
    submitForm: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    auth: PropTypes.shape({
      loading: PropTypes.bool,
    }).isRequired,
    classes: PropTypes.shape({}).isRequired,
    values: PropTypes.shape({
      email: PropTypes.string,
      paswword: PropTypes.string,
    }).isRequired,
    errors: PropTypes.shape({}),
  };

  static defaultProps = {
    errors: {},
  };

  state = {}

  render() {
    const {
      classes, auth, handleSubmit, submitForm, handleChange, errors,
      isSubmitting,
    } = this.props;

    return (
      <Grid
        container
        justify="center"
        alignItems="center"
      >
        <Card md="true">
          <form
            noValidate
            autoComplete="off"
            className={classes.form}
            onSubmit={handleSubmit}
          >
            <CardContent>
              <FormControl
                margin="normal"
                required
                fullWidth
                error={!!errors.email}
              >
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  onChange={handleChange}
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </FormControl>

              <FormControl
                margin="normal"
                required
                fullWidth
                error={!!errors.password}
              >
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                />
              </FormControl>
            </CardContent>

            <CardActions>
              <Button
                type="submit"
                size="small"
                disabled={isSubmitting}
              >
                {auth.loading ? <LinearProgress /> : 'Login'}
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
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withFormik({
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Preencha o campo email'),
      password: Yup.string().required('Preencha o campo password'),
    }),

    validateOnChange: false,

    handleSubmit: (values, { props, setSubmitting }) => {
      const { email, password } = values;

      props.signInRequest(email, password);
      setSubmitting(false);
    },
  }),
  withStyles(styles),
)(Singin);
