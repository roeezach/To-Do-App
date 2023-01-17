import React from "react";
import IconCross from "../images/icon-cross.svg";
import IconCheck from "../images/icon-check.svg";

const TodoItem = ({ content, isCompleted, onToggle, onRemove }) => {
  return (
    <div className="todo-Item-wrapper" ismarked={`${isCompleted}`}>
      <div className="todo-Item">
        <button className="check-btn" type="submit" onClick={onToggle}>
          <img src={IconCheck} alt="logo" />
        </button>
        <div className="todo-item-content">{content}</div>
      </div>
      <div className="remove-btn">
        <button onClick={onRemove}>
          <img src={IconCross} alt="logo" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
