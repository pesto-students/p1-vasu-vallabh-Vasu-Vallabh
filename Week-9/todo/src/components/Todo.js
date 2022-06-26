import React, { useState } from "react";
import { MdRemoveCircle } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import TodoForm from "./TodoForm";

function Todo({ todos, removeTodo, completeTodo, updateTodo }) {
  let [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const updateOnSumbmit = value => {
    updateTodo(edit.id, value);
    setEdit({
        id: null,
        value: ''
    })
  }

  if(edit.id) {
      return <TodoForm edit={edit} onSubmit={updateOnSumbmit}></TodoForm>
  }

  return todos.map((todo) => {
    return (
      <div key={todo.id} className={todo.isComplete ? "todo-row complete" : "todo-row"}>
        <div onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div>
            <AiFillEdit onClick={() => setEdit({ id: todo.id, value: todo.text })}></AiFillEdit>
            <MdRemoveCircle onClick={() => removeTodo(todo.id)}></MdRemoveCircle>
        </div>
      </div>
    );
  });
}

export default Todo;
