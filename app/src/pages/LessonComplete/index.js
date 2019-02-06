import React, { Component } from 'react';

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as LessonActions } from '~/store/ducks/lesson';

import { withStyles } from '@material-ui/core/styles';

import Layout from '~/components/Layout';

import styles from './styles';

class LessonComplete extends Component {
  render() {
    return (
      <Layout>
        Lesson complete
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  lesson: state.lesson,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...LessonActions }, dispatch);

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(LessonComplete);
