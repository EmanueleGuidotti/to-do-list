import React from "react";
import { Provider } from "react-redux";
import { TodoListContainer } from "../pages/todoList";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <TodoListContainer />
    </Provider>
  );
}

export default App;
