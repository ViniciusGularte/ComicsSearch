import { ADD_CHARACTER } from "./type";

export const addCharacter = (
  characterId,
  characterName,
  characterGender,
  characterRealName,
  characterAliase,
  characterBirth,
  characterImage,
  isFavorite
) => async (dispatch) => {
  return dispatch({
    type: ADD_CHARACTER,
    payload: {
      characterId,
      characterName,
      characterGender,
      characterRealName,
      characterAliase,
      characterBirth,
      characterImage,
      isFavorite,
    },
  });
};
