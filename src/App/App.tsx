import React from "react";
import { Provider } from "react-redux";
import { TodoListContainer } from "../pages/todoList";
import { setupStore } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTE_PATHS } from "../defines/routePaths";

const store = setupStore();

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
