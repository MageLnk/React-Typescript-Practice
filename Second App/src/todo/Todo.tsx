import Title from "./components/Title";
import TodoList from "./components/TodoList";
import TodoProvider from "./context/TodoProvider";

// App
const Todo = () => {
  return (
    <TodoProvider>
      <Title />
      <TodoList />
    </TodoProvider>
  );
};

export default Todo;
