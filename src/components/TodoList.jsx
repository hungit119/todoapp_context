import { React, useState } from "react";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { v4 } from "uuid";
import Todo from "./Todo";

import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoList = () => {
  const [input, setInput] = useState("");

  const { todoState, addTodo, themeState } = useContext(TodoContext);

  const onChangeInputValue = (e) => {
    setInput(e.target.value);
  };

  const onClickBtnAdd = () => {
    addTodo({
      id: v4(),
      name: input,
      isComplete: false,
    });
    setInput("");
  };
  const { Light } = themeState;
  return (
    <div style={{ margin: "8px" }} className={Light ? "" : "darkmod"}>
      <TextField
        elemAfterInput={
          <Button
            appearance="primary"
            onClick={onClickBtnAdd}
            isDisabled={!input}
          >
            Thêm
          </Button>
        }
        name="todoInput"
        value={input}
        onChange={onChangeInputValue}
      />
      <div>
        {todoState.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
