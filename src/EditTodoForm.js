import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";

function EditTodoForm({ id, task, toggleIsEditing }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);

  const handleUpdateTodo = (e) => {
    e.preventDefault();

    dispatch({ type: "UPDATE", id, task: value });
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
