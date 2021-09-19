import React, { useCallback } from "react";
import { StarOutlined, StarFilled, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import s from "./Task.module.css";

const PinTask = ({ isPinned, onClick }) => {
  if (isPinned) {
    return <StarFilled onClick={() => onClick(!isPinned)} />;
  }
  return <StarOutlined onClick={() => onClick(!isPinned)} />;
};

const Action = ({ id, onClick }) => {
  if (id === undefined) {
    return <PlusOutlined onClick={() => onClick()} />;
  }
  return <DeleteOutlined onClick={() => onClick(id)} />;
};

const TaskAction = ({ id, isPinned, onPinTaskClick, onActionClick }) => {
  const onPinTaskClickHOF = useCallback(
    (id) => {
      if (id === undefined) return (isPinned) => onPinTaskClick(isPinned);
      return (isPinned) => onPinTaskClick(id, !isPinned);
    },
    [onPinTaskClick]
  );

  return (
    <React.Fragment>
      <div className={s.pinAction}>
        <PinTask isPinned={isPinned} onClick={onPinTaskClickHOF(id)} />
      </div>
      <div className={s.deleteAction}>
        <Action id={id} onClick={onActionClick} />
      </div>
    </React.Fragment>
  );
};

export default TaskAction;
