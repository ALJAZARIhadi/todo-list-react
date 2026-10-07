import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // trying to understand 
        background: "grey",
      }}
    >
      <TodoList />  
    </div>
  );
}

export default App;