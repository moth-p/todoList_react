React + Tailwind Todo List

這是一個使用 React + Tailwind CSS 製作的 Todo List 小專案，透過 useState 與 useEffect 管理狀態、並將資料存入 localStorage。專案也示範如何將程式拆分成多個元件，透過 props 傳遞，讓程式架構更清晰易維護。

————————————————————————————————————————————————————————————————————————

功能特色

1.新增代辦事項
在輸入框輸入文字並按下 Add，即可將一筆新的待辦事項加入清單。

2.顯示完成狀態
透過 checkbox 切換是否完成，並根據完成狀態改變文字樣式。

3.刪除代辦事項
點擊 Delete 按鈕可直接移除對應項目。

4自動儲存
每次新增、切換或刪除後，清單都會同步更新到 localStorage，即使重新整理頁面也能保留。

————————————————————————————————————————————————————————————————————————

練習重點

1.useState 管理狀態
利用 useState 建立 todos 狀態，並在不同操作中以 Immutable 方式 (如 map、filter、展開運算子 ...) 更新內容。

2.useEffect 進行副作用處理
監聽 todos 狀態改變，及時將最新資料存到 localStorage；在初始時讀取既有資料。

3.資料拆分與 props 傳遞
App.jsx 作為主要邏輯入口，分成 NewTodoForm（表單元件）、TodoList（清單容器）、TodoItem（清單項目）等，透過 props 溝通與更新。

4.Tailwind CSS
使用 Utility Class 快速完成版面配置、按鈕外觀與字體樣式。

————————————————————————————————————————————————————————————————————————

程式結構
src
├── App.jsx                # 主要邏輯：管理 todos 狀態、新增/切換/刪除功能，以及匯入其他元件
├── NewTodoForm.jsx        # 表單元件，用於新增待辦
├── TodoList.jsx           # 清單容器元件，負責顯示一列 TodoItem
├── TodoItem.jsx           # 單筆待辦元件，含 checkbox 與刪除按鈕
└── main.js                # React 應用程式入口

————————————————————————————————————————————————————————————————————————

1.App.jsx (核心邏輯)
・讀取/儲存 localStorage：
・透過 useEffect(() => { localStorage.setItem("ITEMS", ...) }, [todos]) 每次更新都同步資料。
・addTodo / toggleTodo / deleteTodo：三種操作對應新增、勾選切換、刪除的行為，透過 setTodos 進行狀態更新。

2.NewTodoForm.jsx (表單)
・負責處理輸入框與提交邏輯：onSubmit 時呼叫父元件傳入的 addTodo，將新代辦項目加入清單。

3.TodoList.jsx (清單容器)
・透過 .map() 遍歷 todos，為每筆項目產生一個 TodoItem 元件。
・若 todos.length === 0，則顯示「No Todos」的提示。

4.TodoItem.jsx (單筆待辦)
・顯示一筆待辦資訊（標題、checkbox、Delete 按鈕）。
・勾選 checkbox → 呼叫 toggleTodo；
・點擊刪除 → 呼叫 deleteTodo。