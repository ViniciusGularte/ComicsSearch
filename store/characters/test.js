import reducer from "./reducer";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import "cross-fetch/polyfill";
import * as actions from "./action";
import * as types from "./type";

describe("actions", () => {
  it("should create an action to add a character", () => {
    const character = {
      id: "32",
      name: "vini",
      gender: 1,
      real_name: "vinicius",
      aliases: "funcionario da meliuz XD",
      birth: "",
      image:
        "https://lh3.googleusercontent.com/ogw/ADGmqu9dzci973Q4z9Ty7xRnsiB-ACmhTLZb36Hr2mH8hQ=s32-c-mo",
      is_favorite: true,
    };
    const store = mockStore({ characters: {} });
    const expectedActions = [
      {
        type: types.ADD_CHARACTER,
        payload: {
          characterAliase: "funcionario da meliuz XD",
          characterBirth: "",
          characterGender: 1,
          characterId: "32",
          characterImage:
            "https://lh3.googleusercontent.com/ogw/ADGmqu9dzci973Q4z9Ty7xRnsiB-ACmhTLZb36Hr2mH8hQ=s32-c-mo",
          characterName: "vini",
          characterRealName: "vinicius",
          isFavorite: true,
        },
      },
    ];
    return store
      .dispatch(
        actions.addCharacter(
          character.id,
          character.name,
          character.gender,
          character.real_name,
          character.aliases,
          character.birth,
          character.image,
          character.is_favorite
        )
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
describe("character reducer test", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      characters: {},
    });
  });
});
