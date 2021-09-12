import React from "react";
import PropTypes from "prop-types";

import { connect, useDispatch } from "react-redux";
import { setIsWrongState } from "../lib/redux";
import TaskList from "./TaskList";

const mapStateToProps = (state) => {
  const { isWrongState } = state;
  return { isWrongState };
  // return { error: isWrongState };
};

export function PureInboxScreen({ error, isWrongState }) {
  const dispatch = useDispatch();
  if (isWrongState) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }
  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList />
      <button onClick={() => dispatch(setIsWrongState(true))}>setWrongStatus</button>
    </div>
  );
}

PureInboxScreen.propTypes = {
  /** The error message */
  error: PropTypes.string,
};

PureInboxScreen.defaultProps = {
  error: null,
};

export default connect(mapStateToProps)(PureInboxScreen);
