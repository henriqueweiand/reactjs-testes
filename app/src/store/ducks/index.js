import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as auth } from './auth';

export default history => combineReducers({
  auth,
  toastr: toastrReducer,
  router: connectRouter(history),
});
