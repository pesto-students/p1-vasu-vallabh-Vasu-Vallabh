import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  let [todos, setTodos] = useState([]);

  const handleOnSumbmit = (e) => {
    if(!e.text) {
        return 
    }
    setTodos([...todos, e]);
  };

  const removeTodo = (id) => {
    let filteredArray = [...todos].filter((item) => item.id !== id);
    setTodos(filteredArray);
  };

  const updateTodo = (todoId, newValue) => {
    if(!newValue) {
        return 
    }
    
    let updatedList = todos.map((todo) => {
        if(todoId === todo.id) {
            console.log({todo},{newValue});
            return {...todo, text: newValue.text}
        }
        return todo
    })
    setTodos(updatedList);
      
  } 

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <TodoForm onSubmit={handleOnSumbmit} />
      <div>
        <Todo 
            todos={todos}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            updateTodo={updateTodo}
        ></Todo>
      </div>
    </>
  );
}

export default TodoList;
