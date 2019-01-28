import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from '~/services/api';

import AuthActions from '~/store/ducks/auth';

export function* singIn({ email, password }) {
  console.tron.log('aq', email, password);
  try {
    const response = yield call(api.post, 'sessions', { email, password });
    localStorage.setItem('@sistema:token', response.data.token);
    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(push('/'));
  } catch (err) {
    console.log(err);
  }
}
