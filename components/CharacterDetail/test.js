import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CharacterDetail from "./index";
const initialState = {
  characters: {},
};
const characterInfo = {
  results: {
    id: "545",
    name: "vini",
    image: {
      medium_url: "",
    },
  },
};
Enzyme.configure({ adapter: new Adapter() });

describe("CharacterDetail", () => {
  const mockStore = configureStore();
  let store;
  it("renders correctly", () => {
    store = mockStore(initialState);
    const wrapper = shallow(
      <Provider store={store}>
        <CharacterDetail characterInfo={characterInfo} />{" "}
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders character name", () => {
    store = mockStore(initialState);
    const wrapper = shallow(
      <Provider store={store}>
        <CharacterDetail characterInfo={characterInfo} />{" "}
      </Provider>
    );
  });
});
