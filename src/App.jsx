import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    // todos 初始狀態：確認 localStorage 有沒有既存清單
    // 沒有的話返回 []
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  // 存入 localStorage
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  // Add 按鈕（新增單個 todo item）
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }

  // 顯示 checkbox 勾選與否
  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  // Delete 按鈕（刪除單個 todo item）
  function deleteTodo(id) {
    // 透過 filter 過濾清單並返回（其中「不包含」點擊 Delete 的那一項 item）
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <section className="font-mono p-5">
        {/* 將 表單部分 獨立成一個元件，並傳送 props（addTodo）給它 */}
        <NewTodoForm addTodo={addTodo} />

        <h3 className="text-2xl mb-5">Todo List</h3>
        {/* 將 todo清單 獨立成一個元件，並傳送 props (todos, toggleTodo, deleteTodo) 給它 */}
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </section>
    </>
  );
}

export default App;
