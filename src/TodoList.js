import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

function TodoList({ todos = [], ...props }) {
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <div key={todo.id}>
              <Todo
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                removeTodo={props.removeTodo}
                toggleTodo={props.toggleTodo}
                updateTodo={props.updateTodo}
              ></Todo>

              {i < todos.length - 1 && <Divider></Divider>}
            </div>
          ))}
        </List>
      </Paper>
    );
  }
  return null;
}

export default TodoList;
