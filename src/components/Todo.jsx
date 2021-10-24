import React from "react";
import Button from "@atlaskit/button";
import IconCheck from "@atlaskit/icon/glyph/check";
import IconDel from "@atlaskit/icon/glyph/trash";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Todo = ({ todo }) => {
  const { completeTodo, delTodo } = useContext(TodoContext);
  const onComplete = (id) => {
    completeTodo(id);
  };
  const onClickTrash = (id) => {
    delTodo(id);
  };
  return (
    <Button
      className="todo-item"
      shouldFitContainer
      iconAfter={
        <span>
          <span className="icon-check" onClick={onComplete.bind(this, todo.id)}>
            <IconCheck />
          </span>
          <span
            className="icon-check"
            onClick={onClickTrash.bind(this, todo.id)}
          >
            <IconDel />
          </span>
        </span>
      }
      className={todo.isComplete ? "btn-todo todo-default" : "todo-default"}
    >
      <span>{todo.name}</span>
    </Button>
  );
};

export default Todo;
