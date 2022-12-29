import { TodoListContainer } from "./todoListContainer";
import { renderWithProviders } from "../../utils/test/renderWithProviders";
import { screen, waitFor } from "@testing-library/react";
import { server } from "../../utils/test/server";
import { rest } from "msw";

describe("Todo list test", () => {
  test("render components without errors", async () => {
    const { getAllByTestId, getByTestId } = renderWithProviders(
      <TodoListContainer />
    );

    await screen.findByTestId("todo-list-container-test-loading");
    await screen.findByTestId("todo-list-container-test");

    const todoListContainer = getByTestId("todo-list-container-test");
    expect(todoListContainer).toBeInTheDocument();

    const rows = getAllByTestId("row-container-test");
    expect(rows).toHaveLength(200);
  });
});
