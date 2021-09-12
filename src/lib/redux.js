import { createStore } from "redux";

export const actions = {
  ARCHIVE_TASK: "ARCHIVE_TASK",
  PIN_TASK: "PIN_TASK",
  SET_WRONG_STATE: "SET_WRONG_STATE",
};

export const archiveTask = (id) => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = (id) => ({ type: actions.PIN_TASK, id });
export const setIsWrongState = (isWrongState) => ({ type: actions.SET_WRONG_STATE, isWrongState });

function taskStateReducer(taskState) {
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map((task) => (task.id === action.id ? { ...task, state: taskState } : task)),
    };
  };
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer("TASK_ARCHIVED")(state, action);
    case actions.PIN_TASK:
      return taskStateReducer("TASK_PINNED")(state, action);
    case actions.SET_WRONG_STATE:
      return {
        ...state,
        isWrongState: action.isWrongState,
      };

    // return taskListReducer(state, action);
    default:
      return state;
  }
};

const defaultTasks = [
  { id: "1", title: "title 1", state: "TASK_INBOX" },
  { id: "2", title: "title 2", state: "TASK_INBOX" },
  { id: "3", title: "title 3", state: "TASK_INBOX" },
  { id: "4", title: "title 4", state: "TASK_INBOX" },
];

const taskBox = {
  tasks: defaultTasks,
  isWrongState: false,
};

export default createStore(
  reducer,
  taskBox,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
