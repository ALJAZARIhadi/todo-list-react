import { TodosContext } from "./contexts/todosContext";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TodoList from "./TodoList";
import {ToastProvider } from "./contexts/ToastContext";
const initialTodos = [
  {
    id: uuidv4(),
    title: " 1قراءة كتاب",
    description: " نيتبنت تن سيت",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: " 2قراءة كتاب",
    description: " نيتبنت تن سيت",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: " 3قراءة كتاب",
    description: " نيتبنت تن سيت",
    isCompleted: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <ToastProvider>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "110vh", // trying to understand
          background: "#1e1e2f",
        }}
      >
        <TodosContext.Provider value={{ todos, setTodos }}>
          <TodoList />
        </TodosContext.Provider>
      </div>
    </ToastProvider>
  );
}

export default App;
