import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */
const { Types, Creators } = createActions({
  setMessage: ['type', 'message'],
  setHide: [],
});

export const SnackbarTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  visible: false,
  type: '',
  message: '',
});

/* Reducers */
export const set = (state, { type, message }) => ({
  ...state, visible: true, type, message,
});
export const hide = state => ({ ...state, visible: false });

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_MESSAGE]: set,
  [Types.SET_HIDE]: hide,
});
