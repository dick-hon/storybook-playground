import React from "react";
import s from "./Task.module.css";
const TaskHeader = () => {
  return (
    <div className={s.taskContainer} style={{ padding: "24px" }}>
      <div className={s.taskIndexContainer}>Index</div>
      <div className={s.taskArchivedContainer}>Done</div>
      <div className={s.taskTitleContainer}>Task Title</div>
      <div className={s.actionContainer}>Action</div>
    </div>
  );
};

export default TaskHeader;
