import React, { useReducer } from "react";
import { useState } from "react";

const Input = (props) => {
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const validateText = (text) => {
    if (!text) return false;
    if (text.length < 3) return false;

    return true;
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const isTextValid = validateText(event.target.value);
      if (isTextValid) {
        onAddTodo();
        setContent("");
        console.log(content);
      } else {
        alert("your text can't be empty");
      }
    }
  };

  const onAddTodo = () => {
    const newToDo = {
      content: content,
      isCompleted: false,
      id: Math.random(),
    };
    props.setTodos([...props.todos, newToDo]);
  };

  return (
    <div>
      <input
        placeholder="Please type your todo here"
        type="text"
        id="textInput"
        className="textInput"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={content}
      ></input>
    </div>
  );
};

export default Input;
