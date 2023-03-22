import { useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import todoReducer from "./todoReducer";

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    { id: "1", desc: "Destruir el universo", completed: false },
    { id: "2", desc: "Matar a Thanos", completed: false },
  ],
  completed: 0,
  pending: 2,
};

interface todoProviderProps {
  children: JSX.Element | JSX.Element[];
}

const TodoProvider = ({ children }: todoProviderProps) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const toogleTodo = (id: string) => {
    dispatch({ type: "toggleTodo", payload: { id } });
  };

  return <TodoContext.Provider value={{ todoState, toogleTodo }}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
