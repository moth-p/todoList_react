import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
        },
      ];
    });

    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <section className="font-mono p-5">
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

        <h3 className="text-2xl mb-5">Todo List</h3>
        <ul className="flex flex-col justify-center items-start gap-3">
          {todos.length === 0 && <div className="text-slate-400 ps-5">No Todos</div> }
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className="flex justify-start items-center gap-6"
              >
                <label className="flex justify-start items-center gap-6">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className={todo.completed ? "text-slate-400" : ""}>
                    {todo.title}
                  </span>
                </label>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="w-14 bg-red-400 text-slate-50 text-[10px] px-2 rounded-md hover:opacity-80 active:opacity-60"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default App;
