import React, { Component } from 'react';

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { Creators as LessonActions } from '~/store/ducks/lesson';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateRange from '@material-ui/icons/DateRange';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';

import Layout from '~/components/Layout';

import styles from './styles';

class Main extends Component {
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { mainLessonsRequest } = this.props;
    mainLessonsRequest();
  }

  startedLesson = (lesson) => {
    const { lesson: { myData } } = this.props;

    return myData.find(lessonItem => lessonItem.lesson_id === lesson.id);
  }

  renderLessons = () => {
    const { lesson: { data } } = this.props;

    return data.map((lessonItem) => {
      const startedLesson = this.startedLesson(lessonItem);

      return (
        <Link
          key={lessonItem.id}
          to={`lesson/${lessonItem.id}`}
        >
          <Grid
            item
          >
            <Fab color="primary" aria-label="Add">
              <DateRange />
            </Fab>

            <Typography variant="button" gutterBottom>
              {lessonItem.title}
            </Typography>

            <div>
              {startedLesson ? 'Continuar' : 'Começar' }
            </div>
          </Grid>
        </Link>
      );
    });
  }

  render() {
    return (
      <Layout>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {this.renderLessons()}
        </Grid>
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
)(Main);
