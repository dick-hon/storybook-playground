import { createStore } from "redux";

export const actions = {
  SET_FINISH_TASK: "SET_FINISH_TASK",
  SET_PIN_TASK: "SET_PIN_TASK",
  SET_WRONG_STATE: "SET_WRONG_STATE",
  CHANGE_TASK_TITLE: "CHANGE_TASK_TITLE",
  CREATE_TASK: "CREATE_TASK",
  DELETE_TASK: "DELETE_TASK",
};

export const setFinishTask = (id, isFinished) => ({ type: actions.SET_FINISH_TASK, payload: { id, isFinished } });
export const setPinTask = (id, isPinned) => ({ type: actions.SET_PIN_TASK, payload: { id, isPinned } });
export const setIsWrongState = (isWrongState) => ({ type: actions.SET_WRONG_STATE, isWrongState });
export const changeTaskTitle = (id, title) => ({ type: actions.CHANGE_TASK_TITLE, payload: { id, title } });
export const createTask = ({ title, isFinished, isPinned }) => ({
  type: actions.CREATE_TASK,
  payload: { title, isFinished, isPinned },
});
export const deleteTask = (id) => ({
  type: actions.DELETE_TASK,
  payload: { id },
});

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
    case actions.SET_FINISH_TASK: {
      return handleStatusChange("isFinished")(state, action);
    }
    case actions.SET_PIN_TASK: {
      return handleStatusChange("isPinned")(state, action);
    }
    case actions.SET_WRONG_STATE: {
      return {
        ...state,
        isWrongState: action.isWrongState,
      };
    }
    case actions.CHANGE_TASK_TITLE: {
      const { id, title } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
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
    }
    case actions.CREATE_TASK: {
      const { title, isFinished, isPinned } = action.payload;

      console.log("%credux.js line:74 id:", "color: white; background-color: #26bfa5;", state.tasks.length);

      const newTask = {
        id: toString(state.tasks.length),
        title,
        isFinished,
        isPinned,
      };
      const clonedTask = [...state.tasks];
      clonedTask.push(newTask);
      return {
        ...state,
        tasks: clonedTask,
      };
    }
    case actions.DELETE_TASK: {
      const { id } = action.payload;
      const clonedTask = [...state.tasks].filter((task) => task.id !== id);
      return {
        ...state,
        tasks: clonedTask,
      };
    }

    default:
      return state;
  }
};

const defaultTasks = [
  { id: "1", title: "title 1", isFinished: false, isPinned: false },
  { id: "2", title: "title 2", isFinished: false, isPinned: false },
  { id: "3", title: "title 3", isFinished: false, isPinned: false },
  { id: "4", title: "title 4", isFinished: false, isPinned: false },
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
