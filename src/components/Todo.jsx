import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button>Add</button>
      </form>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
