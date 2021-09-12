import { createStore } from "redux";

export const actions = {
  SET_ARCHIVE_TASK: "SET_ARCHIVE_TASK",
  SET_PIN_TASK: "SET_PIN_TASK",
  SET_WRONG_STATE: "SET_WRONG_STATE",
  CHANGE_TASK_TITLE: "CHANGE_TASK_TITLE",
};

export const setArchiveTask = (id, isArchived) => ({ type: actions.SET_ARCHIVE_TASK, payload: { id, isArchived } });
export const setPinTask = (id, isPinned) => ({ type: actions.SET_PIN_TASK, payload: { id, isPinned } });
export const setIsWrongState = (isWrongState) => ({ type: actions.SET_WRONG_STATE, isWrongState });
export const changeTaskTitle = (id, title) => ({ type: actions.CHANGE_TASK_TITLE, payload: { id, title } });

const handleStatusChange = (updateStatus) => {
  return (state, action) => {
    console.log({ updateStatus, state, action });
    const { id } = action.payload;
    const index = state.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      const clonedTask = [...state.tasks];
      clonedTask[index][updateStatus] = !clonedTask[index][updateStatus];
      return {
        ...state,
        tasks: clonedTask,
      };
    } else {
      return state;
    }
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_ARCHIVE_TASK: {
      console.log("actions.ARCHIVE_TASK");
      return handleStatusChange("isArchived")(state, action);
    }

    case actions.SET_PIN_TASK:
      return handleStatusChange("isPinned")(state, action);
    case actions.SET_WRONG_STATE:
      return {
        ...state,
        isWrongState: action.isWrongState,
      };
    case actions.CHANGE_TASK_TITLE:
      const { id, title } = action.payload;

      console.log("title: ", title);
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      console.log("taskIndex: ", taskIndex);
      if (taskIndex !== -1) {
        const clonedTask = [...state.tasks];
        clonedTask[taskIndex]["title"] = title;
        return {
          ...state,
          tasks: clonedTask,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

const defaultTasks = [
  { id: "1", title: "title 1", isArchived: false, isPinned: false },
  { id: "2", title: "title 2", isArchived: false, isPinned: false },
  { id: "3", title: "title 3", isArchived: false, isPinned: false },
  { id: "4", title: "title 4", isArchived: false, isPinned: false },
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
