import React, { useState, useRef, useEffect } from "react";

function TodoForm(props) {
  let [input, setInput] = useState(props.edit ? props.edit.value : "");
  let [id, setId] = useState(1000);
  let inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(id + 10);
    props.onSubmit({
      id: id,
      text: input.trim(),
    });
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            value={input}
            type="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          ></input>
          <button className="todo-button">Update</button>
        </>
      ) : (
        <>
          <input
            value={input}
            type="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          ></input>
          <button className="todo-button">Add</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
