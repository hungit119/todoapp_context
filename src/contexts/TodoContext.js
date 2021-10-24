import { createContext, useState } from "react";
import { useReducer } from "react";
import TodoReducer from "../reducers/TodoReducer";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todoState, dispatch] = useReducer(TodoReducer, []);
  const [themeState, setThemeState] = useState({
    Light: true,
    light: {
      backgroundColor: "#fff",
    },
    dark: {
      backgroundColor: "000",
    },
  });

  const addTodo = (newTodo) => {
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
  };

  const completeTodo = (id) => {
    dispatch({
      type: "COMPLETE_TODO",
      payload: id,
    });
  };

  const delTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  const todoContextData = {
    todoState,
    addTodo,
    completeTodo,
    delTodo,
    themeState,
  };

  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
