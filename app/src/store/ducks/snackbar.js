export const Types = {
  SET: 'snackbar/SET',
  HIDE: 'snackbar/HIDE',
};

const INITIAL_STATE = {
  visible: false,
  type: '',
  message: '',
};

export default function snackbar(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET:
      return { ...state, visible: true, ...action.payload };
    case Types.HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
}

export const Creators = {
  setMessage: (type, message) => ({
    type: Types.SET,
    payload: { type, message },
  }),

  hideSnackbar: () => ({
    type: Types.HIDE,
  }),
};
