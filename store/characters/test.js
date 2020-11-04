import * as actions from "./action";
import * as types from "./type";
describe("actions", () => {
  it("should create an action to add a character", () => {
    const character = {
      id: 1,
      name: "rew",
    };
    const expectedAction = {
      type: types.ADD_CHARACTER,
      character,
    };
    expect(actions.addCharacter(character)).toEqual(expectedAction);
  });
});
