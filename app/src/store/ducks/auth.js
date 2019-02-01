export const Types = {
  SIGN_IN_REQUEST: 'auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'auth/SIGN_IN_SUCCESS',
};

const INITIAL_STATE = {
  signedIn: false,
  token: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case Types.SIGN_IN_SUCCESS:
      return { ...state, signedIn: true, token: action.payload.token };
    default:
      return state;
  }
}

export const Creators = {
  signInRequest: (email, password) => ({
    type: Types.SIGN_IN_REQUEST,
    payload: { email, password },
  }),

  signInSuccess: token => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: { token },
  }),
};
