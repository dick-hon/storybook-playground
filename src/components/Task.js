import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import s from "./Task.module.css";

const Task = ({
  task: { id, title, isArchived, isPinned },
  onArchiveTaskChange,
  onPinTaskChange,
  onTitleChange,
  onDeleteTask,
}) => {
  return (
    <div className={`list-item`}>
      <div className={cx(s.taskArchivedContainer)}>
        <input
          type="checkbox"
          value={isArchived}
          onClick={(event) => {
            console.log(event);
            onArchiveTaskChange(id, !event.target.checked);
          }}
          name="archiveTask"
        />
      </div>
      <div className="title">
        <input type="text" value={title} onChange={(e) => onTitleChange(id, e.target.value)} placeholder="Task Title" />
      </div>
      <div className={("actions", s.actionContainer)}>
        <div className={s.pinAction} onClick={() => onPinTaskChange(id, !isPinned)}>
          <span>{isPinned ? "pinned" : "unPin"}</span>
          {/* <span className={`icon-star`}></span> */}
          {/* <span className={isPinned ? s.fillIconStar : s.unFillIconStart}></span> */}
        </div>
        <div onClick={() => onDeleteTask(id)}>
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
};

export default Task;

Task.propTypes = {
  /** Composition of the task */
  task: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string.isRequired,
    /** Title of the task */
    title: PropTypes.string.isRequired,
    isArchived: PropTypes.bool.isRequired,
    isPinned: PropTypes.bool.isRequired,
  }),
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
  onTitleChange: PropTypes.func,
  onDeleteTask: PropTypes.func,
};
