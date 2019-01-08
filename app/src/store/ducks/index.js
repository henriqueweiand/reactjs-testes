import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// import { reducer as toaster } from 'react-redux-toastr';
import { reducer as auth } from './auth';

export default history => combineReducers({
  auth,
  // toaster,
  router: connectRouter(history),
});
