import { fireEvent, render, waitFor, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AddTodoContainer } from "./addTodoContainer";

describe("Add Todo test", () => {
  const onAddToList = jest.fn();

  test("render components without errors", () => {
    const { getByTestId } = render(
      <AddTodoContainer onAddToList={onAddToList} />
    );
    const addTodoContainer = getByTestId("add-todo-container-test");
    expect(addTodoContainer).toBeInTheDocument();
  });

  test("component logic", async () => {
    const { getByTestId } = render(
      <AddTodoContainer onAddToList={onAddToList} />
    );
    const addTodoContainer = getByTestId("add-todo-container-test");
    const input = within(addTodoContainer).getByTestId("input-test");
    const button = within(addTodoContainer).getByTestId("button-test");
    fireEvent.change(input, { target: { value: "some value" } });
    await waitFor(() => {
      expect(input).toHaveValue("some value");
    });
    fireEvent.click(button);
    expect(onAddToList).toHaveBeenCalledTimes(1);
  });
});
