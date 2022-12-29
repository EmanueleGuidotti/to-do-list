import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { CheckboxContainer } from "./checkboxContainer";

describe("Checkbox test", () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;

  test("render unchecked components without errors", () => {
    store = mockStore(initialState);
    const { getByTestId } = render(
      <Provider store={store}>
        <CheckboxContainer id={1} completed={false} />
      </Provider>
    );
    const checkboxContainer = getByTestId("checkbox-test");
    expect(checkboxContainer).toBeInTheDocument();
    expect(checkboxContainer).not.toBeChecked();
  });

  test("render checked components without errors", () => {
    store = mockStore(initialState);
    const { getByTestId } = render(
      <Provider store={store}>
        <CheckboxContainer id={1} completed={true} />
      </Provider>
    );
    const checkboxContainer = getByTestId("checkbox-test");
    expect(checkboxContainer).toBeInTheDocument();
    expect(checkboxContainer).toBeChecked();
  });
});
