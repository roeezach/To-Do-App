import React from "react";
import IconCross from "../images/icon-cross.svg"
import IconCheck from "../images/icon-check.svg"

const TodoItem = (props) => {

    return (
        <div className="todo-Item-wrapper" ismarked={`${props.isCompleted}`}>
            <div className="todo-Item">
                <button className="check-btn" type="submit" onClick={props.onToggle}>
                    <img src={IconCheck} alt="logo" />
                </button>
                <div className="todo-item-content">
                    {props.content}
                </div>
            </div>
            <div className="remove-btn">
                <button onClick={props.onRemove}>
                    <img src={IconCross} alt="logo" />
                </button>
            </div>
        </div>)
}

export default TodoItem;