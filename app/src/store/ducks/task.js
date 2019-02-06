import _ from 'lodash';

export const Types = {
  TASK_REQUEST: 'task/TASK_REQUEST',
  TASK_REQUEST_SUCCESS: 'task/TASK_REQUEST_SUCCESS',
  NEXT_TASK_REQUEST: 'task/NEXT_TASK_REQUEST',
  NEXT_TASK_SUCCESS: 'task/NEXT_TASK_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: true,
  progress: 0,
  correctTask: [],
  currentTask: false,
  done: false,
};

export default function task(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TASK_REQUEST:
      return { ...INITIAL_STATE };
    case Types.TASK_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        currentTask: _.shuffle(action.payload.data.tasks)[0],
      };
    case Types.NEXT_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.NEXT_TASK_SUCCESS:
      return {
        ...state,
        ...action.payload.data,
        loading: false,
      };
    default:
      return state;
  }
}

export const Creators = {
  TaskRequest: lessonId => ({
    type: Types.TASK_REQUEST,
    payload: { lessonId },
  }),
  TaskRequestSuccess: data => ({
    type: Types.TASK_REQUEST_SUCCESS,
    payload: { data },
  }),
  nextTaskRequest: () => ({
    type: Types.NEXT_TASK_REQUEST,
  }),
  nextTaskSuccess: data => ({
    type: Types.NEXT_TASK_SUCCESS,
    payload: { data },
  }),
};
