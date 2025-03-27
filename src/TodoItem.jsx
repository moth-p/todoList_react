export function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
  return (
    <li className="flex justify-start items-center gap-6">
      <label className="flex justify-start items-center gap-6">
        <input
          type="checkbox"
          checked={completed}
          //  點擊 checkbox -> 目標的 id 的 checkbox 切換勾選狀態
          onChange={(e) => toggleTodo(id, e.target.checked)}
          className="w-4 h-4"
        />
        {/* 項目被勾選時 -> 字的顏色改變 */}
        <span className={completed ? "text-slate-400" : ""}>{title}</span>
      </label>
      <button
        onClick={() => deleteTodo(id)}
        className="w-14 bg-red-400 text-slate-50 text-[10px] px-2 rounded-md hover:opacity-80 active:opacity-60"
      >
        Delete
      </button>
    </li>
  );
}
