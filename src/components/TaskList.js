import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";

import { connect } from "react-redux";
import { setArchiveTask, setPinTask, changeTaskTitle } from "../lib/redux";

const Loading = (props) => {
  return (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span>
        <span>cool</span>
        <span>state</span>
      </span>
    </div>
  );
};

export const TasksList = ({ loading, tasks, onPinTaskChange, onArchiveTaskChange, onTitleChange }) => {
  const events = {
    onPinTaskChange,
    onArchiveTaskChange,
    onTitleChange,
  };

  if (loading) {
    return (
      <div className="list-items">
        {tasks.map((task) => (
          <React.Fragment key={task.id}>
            <Loading />
          </React.Fragment>
        ))}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  // const tasksInOrder = [
  //   ...tasks.filter((task) => task.state === "TASK_PINNED"),
  //   ...tasks.filter((task) => task.state !== "TASK_PINNED"),
  // ];

  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

TasksList.propTypes = {
  /** Checks if it's in loading state */
  loading: PropTypes.bool,
  /** The list of tasks */
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  /** Event to change the task to pinned */
  onPinTaskChange: PropTypes.func,
  /** Event to change the task to archived */
  onArchiveTaskChange: PropTypes.func,
};

TasksList.defaultProps = {
  loading: false,
};

export default connect(
  ({ tasks }) => ({
    // tasks: tasks.filter((t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"),
    tasks,
  }),
  (dispatch) => ({
    onArchiveTaskChange: (id, isArchived) => dispatch(setArchiveTask(id, isArchived)),
    onPinTaskChange: (id, isPinned) => dispatch(setPinTask(id, isPinned)),
    onTitleChange: (id, title) => dispatch(changeTaskTitle(id, title)),
  })
)(TasksList);
