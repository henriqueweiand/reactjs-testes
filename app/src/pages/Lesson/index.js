import React, { Component, Fragment } from 'react';

import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { Creators as TaskActions } from '~/store/ducks/task';

import CancelIcon from '@material-ui/icons/Cancel';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fab from '@material-ui/core/Fab';

import Task from './components/Task';
import Layout from '~/components/Layout';

import styles from './styles';

class Lesson extends Component {
  componentDidMount() {
    const { match: { params: { id } }, TaskRequest } = this.props;
    TaskRequest(id);
  }

  render() {
    const {
      task: {
        loading, progress, data, currentTask,
      },
      nextTaskRequest,
    } = this.props;

    return (
      <Layout
        header={false}
        sidebar={false}
      >
        {
          loading ? 'Carregando' : (
            <Fragment>
              <Grid
                container
                direction="row"
                justify="space-between"
              >
                <Grid
                  item
                  xs={10}
                >
                  Progresso
                  <LinearProgress
                    variant="determinate"
                    value={(progress * 100) / data.tasks.length}
                  />
                </Grid>

                <Grid
                  item
                >
                  <Link to="/">
                    <Fab color="primary" aria-label="Cancel">
                      <CancelIcon />
                    </Fab>
                  </Link>
                </Grid>
              </Grid>

              <Task data={currentTask} />

              <button type="button" onClick={() => this.props.nextTaskRequest()}>
                Proxima
              </button>
            </Fragment>
          )
        }
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  task: state.task,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { ...TaskActions },
  dispatch,
);

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Lesson);
