import { ADD_CHARACTER } from "./type";

const initialState = {
  characters: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      const { payload } = action;
      const {
        characterId,
        characterName,
        characterGender,
        characterRealName,
        characterAliase,
        characterBirth,
        isFavorite,
      } = payload;
      const character = state[characterId];
      return {
        [characterId]: {
          ...character,
          name: characterName,
          gender: characterGender,
          real_name: characterRealName,
          aliases: characterAliase,
          birth: characterBirth,
          is_favorite: isFavorite,
        },
      };

    default:
      return state;
  }
}
