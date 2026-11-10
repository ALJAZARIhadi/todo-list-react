import { TodosContext } from "./contexts/todosContext";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TodoList from "./TodoList";
import MySnackBar from "./components/MySnackBar";

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
  const [open, setOpen] = useState(false);



  function showHideToast(){
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "110vh", // trying to understand
        background: "#1e1e2f",
      }}
    >
      <MySnackBar open={open} />
      <TodosContext.Provider value={{ todos, setTodos }}>
        <TodoList />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
