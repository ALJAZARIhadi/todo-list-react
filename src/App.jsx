import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import TodoList from "./TodoList";
function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "green",
      }}
    >
      <TodoList />
      {/* <Test/> */}
    </div>
  );
}

export default App;
