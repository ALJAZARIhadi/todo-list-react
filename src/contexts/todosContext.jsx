import { createContext, useReducer } from "react";
import todosReducer from "../reducers/todosReducer";

export const TodosContext = createContext([]);

const TodosProvider = ({ children }) => {
  const [todos, todosDispatch] = useReducer(todosReducer, []);
  return (
    <TodosContext.Provider value={{ todos: todos, dispatch: todosDispatch }}>
      {children}
    </TodosContext.Provider>
  );
};
export default TodosProvider;
