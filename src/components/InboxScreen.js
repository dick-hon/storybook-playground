import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

import s from "./Task.module.css";
import { connect, useDispatch } from "react-redux";
import { setIsWrongState } from "../lib/redux";
import TaskList from "./TaskList";
import Task from "./Task";

const mapStateToProps = (state) => {
  const { isWrongState, tasks } = state;
  return { isWrongState, tasks };
};

export function PureInboxScreen({ isWrongState, tasks }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const pinnedTaskCount = useMemo(() => {
    let count = 0;
    tasks.forEach((task) => {
      if (task.isFinished) count++;
    });
    return count;
  }, [tasks]);

  useEffect(() => {
    const apiResponse = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    apiResponse();
  }, []);

  if (isWrongState) {
    return (
      <div className={s.root}>
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className={s.root}>
      <h1>TODO</h1>
      <TaskList loading={isLoading} />
      <h3>
        There are {pinnedTaskCount} out of {tasks.length} Archived Task
      </h3>
      <button onClick={() => dispatch(setIsWrongState(true))}>Set Wrong State</button>
    </div>
  );
}

PureInboxScreen.propTypes = {
  /** The error message */
  isWrongState: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
};

PureInboxScreen.defaultProps = {
  isWrongState: false,
};

export default connect(mapStateToProps)(PureInboxScreen);
