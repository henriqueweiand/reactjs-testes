import { all, takeLatest } from 'redux-saga/effects';

import { singIn } from './auth';
import { Types as AuthTypes } from '~/store/ducks/auth';

import { getLessons, getMyLessons } from './lesson';
import { Types as LessonTypes } from '~/store/ducks/lesson';

import { getTasks, nextTask } from './task';
import { Types as TaskTypes } from '~/store/ducks/task';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, singIn),
    takeLatest(LessonTypes.MAIN_LESSONS_REQUEST, getMyLessons),
    takeLatest(LessonTypes.LESSONS_REQUEST, getLessons),
    takeLatest(TaskTypes.TASK_REQUEST, getTasks),
    takeLatest(TaskTypes.NEXT_TASK_REQUEST, nextTask),
  ]);
}
