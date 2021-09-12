import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { connect, useDispatch } from "react-redux";
import { setIsWrongState } from "../lib/redux";
import TaskList from "./TaskList";

const mapStateToProps = (state) => {
  const { isWrongState } = state;
  return { isWrongState };
};

export function PureInboxScreen({ isWrongState }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
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
      <TaskList loading={isLoading} />
      <button onClick={() => dispatch(setIsWrongState(true))}>Set Wrong State</button>
    </div>
  );
}

PureInboxScreen.propTypes = {
  /** The error message */
  isWrongState: PropTypes.bool,
};

PureInboxScreen.defaultProps = {
  isWrongState: false,
};

export default connect(mapStateToProps)(PureInboxScreen);
