import React, { useCallback } from "react";
import PropTypes from "prop-types";
import s from "./Task.module.css";
import { Input, Checkbox } from "antd";
import TaskAction from "./TaskAction";

const TaskTitle = ({ isFinished, title, onChange }) => {
  if (isFinished) {
    return <span className={s.finishedTaskTitle}>{title}</span>;
  }
  return (
    <Input
      value={title}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Task Title"
      style={{ width: "100%" }}
    />
  );
};

const Task = ({
  task: { id, title, isFinished, isPinned },
  index,
  onFinishTaskClick,
  onPinTaskClick,
  onTitleChange,
  onDeleteTask,
}) => {
  const onChange = useCallback((id) => (title) => onTitleChange(id, title), [onTitleChange]);

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
        <TaskTitle isFinished={isFinished} title={title} onChange={onChange(id)} />
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
