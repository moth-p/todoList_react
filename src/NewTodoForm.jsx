import { useState } from "react";

export function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    // 接收 props addTodo
    addTodo(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 mb-10">
      <label htmlFor="item" className="text-lg">
        New Item
      </label>
      <input
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
        type="text"
        name="item"
        id="item"
        className="w-52 border-2 border-sky-600 rounded-md px-2"
      />
      <button
        type="submit"
        className="w-52 bg-sky-600 text-slate-50 rounded-md flex justify-center items-center hover:opacity-80 active:opacity-60"
      >
        Add
      </button>
    </form>
  );
}
