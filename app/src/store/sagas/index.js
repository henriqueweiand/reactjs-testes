import { all, takeLatest } from 'redux-saga/effects';

import { singIn } from './auth';
import { AuthTypes } from '../ducks/auth';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, singIn),
  ]);
}
