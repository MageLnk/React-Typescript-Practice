import { useTodos } from "../hooks/useTodos";
import { Todo } from "../interfaces/interfaces";

interface TodoItemProps {
  todo: Todo;
}
// App
const TodoItem = ({ todo }: TodoItemProps) => {
  const { toogleTodo } = useTodos();

  const handleDoubleClick = () => {
    toogleTodo(todo.id);
  };

  return (
    <li
      style={{ cursor: "pointer", textDecoration: todo.completed ? "line-through" : "" }}
      onDoubleClick={handleDoubleClick}
    >
      {todo.desc}
    </li>
  );
};

export default TodoItem;
