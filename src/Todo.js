import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggleState from "./hooks/useToggleState";

import EditTodoForm from "./EditTodoForm";

function Todo({ task, completed, id, removeTodo, toggleTodo, updateTodo }) {
  const [isEditing, toggleIsEditing] = useToggleState(false);

  const handleRemoveTodo = () => {
    removeTodo(id);
  };

  const handleToggleTodo = () => {
    toggleTodo(id);
  };

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm
          task={task}
          id={id}
          updateTodo={updateTodo}
          toggleIsEditing={toggleIsEditing}
        ></EditTodoForm>
      ) : (
        <>
          <Checkbox
            tabIndex="-1"
            checked={completed}
            onClick={handleToggleTodo}
          ></Checkbox>
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>

          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={handleRemoveTodo}>
              <DeleteIcon></DeleteIcon>
            </IconButton>

            <IconButton aria-label="Edit" onClick={toggleIsEditing}>
              <EditIcon></EditIcon>
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
