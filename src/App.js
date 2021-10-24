import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Nav />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
