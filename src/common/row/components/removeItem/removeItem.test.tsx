import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { RemoveItemContainer } from "./removeItemContainer";
import configureStore from "redux-mock-store";

describe("Remove item test", () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;

  test("render components without errors", () => {
    store = mockStore(initialState);
    const { getByTestId } = render(
      <Provider store={store}>
        <RemoveItemContainer id={1} />
      </Provider>
    );
    const removeItemContainer = getByTestId("remove-item-test");
    expect(removeItemContainer).toBeInTheDocument();
  });
});
