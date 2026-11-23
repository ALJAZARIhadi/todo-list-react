import { TodosContext } from "./contexts/todosContext";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TodoList from "./TodoList";
import {ToastProvider } from "./contexts/ToastContext";
import { useReducer } from "react";
import TodosProvider from "./contexts/todosContext";
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
    <TodosProvider>
    <ToastProvider>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "110vh", 
          background: "#1e1e2f",
        }}
      >
        
          <TodoList />
        
      </div>
    </ToastProvider>
    </TodosProvider>
  );
}

export default App;
