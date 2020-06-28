import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

function EditTodoForm({ id, task, updateTodo, toggleIsEditing }) {
  const [value, handleChange, reset] = useInputState(task);

  const handleUpdateTodo = (e) => {
    e.preventDefault();

    updateTodo(id, value);
    toggleIsEditing();
    reset();
  };

  return (
    <form
      onSubmit={handleUpdateTodo}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      ></TextField>
    </form>
  );
}

export default EditTodoForm;
