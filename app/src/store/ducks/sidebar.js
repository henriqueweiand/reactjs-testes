export const Types = {
  OPEN: 'sidebar/OPEN',
  CLOSE: 'sidebar/CLOSE',
  TOGGLE: 'sidebar/TOGGLE',
};

const INITIAL_STATE = {
  status: false,
};

export default function sidebar(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN:
      return { ...state, status: true };
    case Types.CLOSE:
      return { ...state, status: false };
    case Types.TOGGLE:
      return { ...state, status: !state.status };
    default:
      return state;
  }
}

export const Creators = {
  setOpen: () => ({ type: Types.OPEN }),
  setClose: () => ({ type: Types.CLOSE }),
  setToggle: () => ({ type: Types.TOGGLE }),
};
