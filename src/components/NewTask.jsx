import React from "react";
import PropTypes from "prop-types";
import s from "./Task.module.css";
import { Input, Checkbox, Card, Button } from "antd";
import TaskAction from "./TaskAction";

const NewTask = ({
  newTask: { title, isFinished, isPinned },
  onFinishTaskClick,
  onPinTaskClick,
  onTitleChange,
  onSave,
}) => {
  return (
    <div className={s.taskContainer} style={{ borderBottom: "1px solid #e9e9e9" }}>
      <div className={s.taskIndexContainer}>New Task</div>
      <div className={s.taskArchivedContainer}>
        <Checkbox checked={isFinished} onChange={(event) => onFinishTaskClick(event.target.checked)} />
      </div>
      <div className={s.taskTitleContainer}>
        <Input
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="Task Title"
          style={{ width: "100%" }}
        />
      </div>
      <div className={s.actionContainer}>
        <TaskAction isPinned={isPinned} onPinTaskClick={onPinTaskClick} onActionClick={onSave} />
      </div>
    </div>
  );
};

NewTask.propTypes = {};

export default NewTask;
