import { useState } from "react";

export default function Todo() {
  const [Todo, setTodo] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={Todo}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
