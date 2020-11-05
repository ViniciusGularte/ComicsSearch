import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CharacterListPagination from "./index";
const initialState = {
  characters: {},
};
const emptyCharacterResponse = {
  error: "OK",
  offset: 0,
  number_of_total_results: 50,
  results: [],
};

Enzyme.configure({ adapter: new Adapter() });

describe("CharacterListPagination", () => {
  const mockStore = configureStore();
  let store;
  it("no favorite | no search", () => {
    store = mockStore(initialState);
    const wrapper = shallow(
      <Provider store={store}>
        <CharacterListPagination
          is_search={false}
          only_favorite={false}
          Itens={emptyCharacterResponse}
        />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("with favorite | no search", () => {
    store = mockStore(initialState);
    const wrapper = shallow(
      <Provider store={store}>
        <CharacterListPagination
          is_search={false}
          only_favorite={true}
          Itens={emptyCharacterResponse}
        />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("no favorite | with search", () => {
    store = mockStore(initialState);
    const wrapper = shallow(
      <Provider store={store}>
        <CharacterListPagination
          is_search={true}
          only_favorite={true}
          Itens={emptyCharacterResponse}
        />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
