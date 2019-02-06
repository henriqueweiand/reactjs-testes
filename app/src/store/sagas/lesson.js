import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as LessonActions } from '~/store/ducks/lesson';
import { Creators as SnackbarActions } from '~/store/ducks/snackbar';

export function* getLessons() {
  try {
    const response = yield call(api.get, 'lesson');

    yield put(LessonActions.lessonsRequestSuccess(response.data));
  } catch (err) {
    yield put(SnackbarActions.setMessage('error', 'Não foi possivel obter as lições'));
    console.log(err);
  }
}

export function* getMyLessons() {
  try {
    const lesson = yield call(api.get, 'lesson');
    const userLesson = yield call(api.get, 'user/lesson');

    yield put(LessonActions.mainLessonsRequestSuccess(lesson.data, userLesson.data));
  } catch (err) {
    yield put(SnackbarActions.setMessage('error', 'Não foi possivel obter as lições'));
    console.log(err);
  }
}
