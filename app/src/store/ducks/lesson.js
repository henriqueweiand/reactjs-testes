export const Types = {
  MAIN_LESSONS_REQUEST: 'lesson/MAIN_LESSONS_REQUEST',
  MAIN_LESSONS_REQUEST_SUCCESS: 'lesson/MAIN_LESSONS_REQUEST_SUCCESS',
  LESSONS_REQUEST: 'lesson/LESSONS_REQUEST',
  LESSONS_REQUEST_SUCCESS: 'lesson/LESSONS_REQUEST_SUCCESS',
  MY_LESSONS_REQUEST: 'lesson/MY_LESSONS_REQUEST',
  MY_LESSONS_REQUEST_SUCCESS: 'lesson/MY_LESSONS_REQUEST_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  myData: [],
  loading: false,
};

export default function lesson(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.MAIN_LESSONS_REQUEST:
      return { ...state, loading: true };
    case Types.MAIN_LESSONS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        myData: action.payload.myData,
      };
    case Types.LESSONS_REQUEST:
      return { ...state, loading: true };
    case Types.LESSONS_REQUEST_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.MY_LESSONS_REQUEST:
      return { ...state, loading: true };
    case Types.MY_LESSONS_REQUEST_SUCCESS:
      return { ...state, loading: false, myData: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  mainLessonsRequest: () => ({
    type: Types.MAIN_LESSONS_REQUEST,
  }),
  mainLessonsRequestSuccess: (data, myData) => ({
    type: Types.MAIN_LESSONS_REQUEST_SUCCESS,
    payload: { data, myData },
  }),
  lessonsRequest: () => ({
    type: Types.LESSONS_REQUEST,
  }),
  lessonsRequestSuccess: data => ({
    type: Types.LESSONS_REQUEST_SUCCESS,
    payload: { data },
  }),
  myLessonsRequest: () => ({
    type: Types.MY_LESSONS_REQUEST,
  }),
  myLessonsRequestSuccess: data => ({
    type: Types.MY_LESSONS_REQUEST_SUCCESS,
    payload: { data },
  }),
};
