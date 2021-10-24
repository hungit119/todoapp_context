const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { payload } = action;
      return [...state, payload];
    case "COMPLETE_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isComplete: true } : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default TodoReducer;
