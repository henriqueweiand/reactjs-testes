import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import snackbar from './snackbar';
import sidebar from './sidebar';
import lesson from './lesson';
import task from './task';

export default history => combineReducers({
  auth,
  snackbar,
  sidebar,
  lesson,
  task,
  router: connectRouter(history),
});
