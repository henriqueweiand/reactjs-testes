import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from '~/services/api';

import { Creators as AuthActions } from '~/store/ducks/auth';
import { Creators as SnackbarActions } from '~/store/ducks/snackbar';

export function* singIn(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(api.post, 'sessions', { email, password });

    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(SnackbarActions.setMessage('success', 'Autenticado'));
    yield put(push('/'));
  } catch (err) {
    console.log(err);
  }
}
