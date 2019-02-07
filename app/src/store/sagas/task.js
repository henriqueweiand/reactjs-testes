import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';
import _ from 'lodash';
import { push } from 'connected-react-router';

import { Creators as TaskActions } from '~/store/ducks/task';
import { Creators as SnackbarActions } from '~/store/ducks/snackbar';

export function* getTasks(action) {
  try {
    const { lessonId } = action.payload;
    const response = yield call(api.get, `lesson/${lessonId}/task`);

    yield put(TaskActions.TaskRequestSuccess(response.data[0]));
  } catch (err) {
    yield put(SnackbarActions.setMessage('error', 'Não foi possivel obter as tarefa'));
    console.log(err);
  }
}

export function* nextTask() {
  try {
    const {
      data: { tasks },
      progress,
      correctTask,
      currentTask,
    } = yield select(state => state.task);

    correctTask.push(currentTask);

    if (correctTask.length === tasks.length) {
      yield put(
        TaskActions.nextTaskSuccess({
          progress: tasks.length,
          done: true,
          correctTask: [],
          currentTask: false,
        }),
      );
      yield put(push('/lesson/complete'));
    } else {
      yield put(
        TaskActions.nextTaskSuccess({
          progress: progress + 1,
          done: correctTask.length === tasks.length,
          correctTask,
          currentTask: tasks.filter(task => !_.find(correctTask, { id: task.id }))[0],
        }),
      );
    }
  } catch (err) {
    yield put(SnackbarActions.setMessage('error', 'Não foi possivel avançar a questão'));
    console.log(err);
  }
}
