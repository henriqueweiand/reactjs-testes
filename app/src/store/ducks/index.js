import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as auth } from './auth';
import { reducer as snackbar } from './snackbar';

export default history => combineReducers({
  auth,
  snackbar,
  router: connectRouter(history),
});
