import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="flex flex-col justify-center items-start gap-3">
      {todos.length === 0 && (
        <div className="text-slate-400 ps-5">No Todos</div>
      )}
      {todos.map((todo) => {
        return (
          <TodoItem
            // {...todo} 包含了以下三個內容
            //  id={todo.id}、title={todo.title}、completed={todo.、completed}
            {...todo}
            key={todo.id} // 陣列必設置 key 唯一識別碼
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
