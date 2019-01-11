import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */
const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem('@sistema:token'),
  token: localStorage.getItem('@sistema:token') || null,
  loading: false,
});

/* Reducers */
export const success = (state, { token }) => state.merge({ signedIn: true, token });

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
});
