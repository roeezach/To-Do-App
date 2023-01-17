import React from "react";
import TodoList from "./components/TodoList";
import Input from "./components/Input";
import { useState } from "react";
import bgDesktopLight from "./images/bg-desktop-light.jpg"
import iconDesktopSun from "./images/icon-sun.svg"
import iconDesktopMoon from "./images/icon-moon.svg"
import bgDesktopDark from "./images/bg-mobile-dark.jpg"

import "./App.css"

const name = 'Roee';

const App = () => {

  const [todos, setTodos] = useState([])


  return (


    <div className="app-wrapper" >
      <div className="background-image">
        <img src={bgDesktopLight} alt="background" />
      </div>
      <div className="content-wrapper">
        <div className="input-wrapper">
          <div className="header-wrapper">
            <h3>TO DO</h3>
            <img src={iconDesktopMoon} alt="moon" className="moonImage" />
          </div>
          <Input todos={todos} setTodos={setTodos}></Input>
          <div className="todo-list-wrapper">
            <TodoList todos={todos} setTodos={setTodos}></TodoList>
          </div>
        </div>
      </div>
    </div >
  )
}

export default App