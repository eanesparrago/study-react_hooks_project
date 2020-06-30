import React, { useContext, memo } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import { DispatchContext } from "./contexts/todos.context";

function Todo({ task, completed, id }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleIsEditing] = useToggleState(false);

  const handleRemoveTodo = () => {
    dispatch({ type: "REMOVE", id });
  };

  const handleToggleTodo = () => {
    dispatch({ type: "TOGGLE", id });
  };

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm
          task={task}
          id={id}
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

export default memo(Todo);
