import React from "react";
import TodoItem from "./TodoItem";
import { useState } from "react";


const TodoList = (props) => {

    const HandleRemoveTodo = (todo) => {
        const newTodos = props.todos.filter(item => item !== todo);
        props.setTodos(newTodos);
    }

    const HandleToggle = (id) => {
        console.log(id);
        const indexToMark = props.todos.findIndex((item) => item.id === id);
        const arrCpy = [...props.todos]
        arrCpy[indexToMark].isCompleted = !arrCpy[indexToMark].isCompleted;
        props.setTodos(arrCpy);
    };

    return (<div>
        {props.todos.map((todo) => <TodoItem key={todo.id} onToggle={() => HandleToggle(todo.id)} content={todo.content} isCompleted={todo.isCompleted} onRemove={() => HandleRemoveTodo(todo)}
        />)}
    </div>)
}

export default TodoList

        // {/* <button onClick={props.onAddTodo}>+</button> */}