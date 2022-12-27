import React from "react";
import { Provider } from "react-redux";
import { TodoListContainer } from "../pages/todoList";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTE_PATHS } from "../defines/routePaths";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTE_PATHS.HOMEPAGE}
            element={<TodoListContainer />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
