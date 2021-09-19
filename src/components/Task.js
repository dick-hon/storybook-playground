import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import s from "./Task.module.css";
import PinTask from "./TaskAction";
import { Input, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import TaskAction from "./TaskAction";

const Task = ({
  task: { id, title, isFinished, isPinned },
  index,
  onFinishTaskClick,
  onPinTaskClick,
  onTitleChange,
  onDeleteTask,
}) => {
  return (
    <div className={s.taskContainer}>
      <div className={s.taskIndexContainer}>
        <span>{index}</span>
      </div>
      <div className={s.taskArchivedContainer}>
        <Checkbox
          checked={isFinished}
          onChange={(event) => {
            console.log(event);
            onFinishTaskClick(id, !event.target.checked);
          }}
        />
      </div>
      <div className={s.taskTitleContainer}>
        <Input
          value={title}
          onChange={(e) => onTitleChange(id, e.target.value)}
          placeholder="Task Title"
          style={{ width: "100%" }}
        />
      </div>
      <div className={s.actionContainer}>
        <TaskAction id={id} isPinned={isPinned} onPinTaskClick={onPinTaskClick} onActionClick={onDeleteTask} />
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
    isFinished: PropTypes.bool.isRequired,
    isPinned: PropTypes.bool.isRequired,
  }),
  /** Event to change the task to archived */
  onFinishTaskClick: PropTypes.func,
  /** Event to change the task to pinned */
  onPinTaskClick: PropTypes.func,
  onTitleChange: PropTypes.func,
  onDeleteTask: PropTypes.func,
};
