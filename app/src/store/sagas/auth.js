import { call, put } from 'redux-saga/effects';
// import { push } from 'connected-react-router';
import api from '~/services/api';

// import AuthActions from '~/store/ducks/auth';
import SnackbarActions from '~/store/ducks/snackbar';

export function* singIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });

    yield put(SnackbarActions.setMessage('success', 'Autenticado'));
    // yield put(AuthActions.signInSuccess(response.data.token));
    // yield put(push('/'));
  } catch (err) {
    console.log(err);
  }
}
