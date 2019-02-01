import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import snackbar from './snackbar';

export default history => combineReducers({
  auth,
  snackbar,
  router: connectRouter(history),
});
