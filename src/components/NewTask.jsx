import React from "react";
import PropTypes from "prop-types";
import s from "./Task.module.css";
import { Input, Checkbox, Card, Button } from "antd";

const NewTask = ({
  newTask: { title, isFinished, isPinned },
  onFinishTaskClick,
  onPinTaskClick,
  onTitleChange,
  onSave,
}) => {
  return (
    <Card hoverable style={{ cursor: "initial" }}>
      <div className={s.taskContainer}>
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
          <div className={s.pinAction}>
            <Button type="primary" onClick={() => onPinTaskClick(!isPinned)}>
              {isPinned ? "Pin Task" : "Unpin Task"}
            </Button>
          </div>
          <div className={s.deleteAction}>
            <Button type="primary" onClick={() => onSave()}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

NewTask.propTypes = {};

export default NewTask;
