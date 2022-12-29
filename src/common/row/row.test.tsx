import { fireEvent, render, waitFor, within } from "@testing-library/react";
import { RowContainer } from "./rowContainer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Row test", () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;

  test("render components without errors", () => {
    store = mockStore(initialState);
    const { getByTestId } = render(
      <Provider store={store}>
        <RowContainer id={1} title="test row" completed={false} />
      </Provider>
    );
    const rowContainer = getByTestId("row-container-test");
    expect(rowContainer).toBeInTheDocument();
  });

  test("render more than one row simultaneously", () => {
    store = mockStore(initialState);
    const { getAllByTestId } = render(
      <Provider store={store}>
        <RowContainer id={1} title="test row 1" completed={false} />
        <RowContainer id={1} title="test row 2" completed={false} />
        <RowContainer id={1} title="test row 3" completed={false} />
      </Provider>
    );
    const rowsContainers = getAllByTestId("row-container-test");
    expect(rowsContainers).toHaveLength(3);
  });
});
