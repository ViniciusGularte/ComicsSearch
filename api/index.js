import SERVER_URL from "../api/SERVER_URL";
const URL_CHARACTERS = `${SERVER_URL}characters/?api_key=34ed2d8cc9fd46b45b240441ca80dc7474d005a9&format=json&&field_list=id,image,name`;
const URL_CHARACTER_INFO = `${SERVER_URL}character/`;
const URL_CHARACTERS_SEARCH = `${SERVER_URL}search/?api_key=34ed2d8cc9fd46b45b240441ca80dc7474d005a9&&format=json&&resources=character&&resource_type=character&&query=`;
const getCharacters = async (offset) => {
  const LIMIT = 50;
  const res = await fetch(`${URL_CHARACTERS}&&offset=${offset}&&limit=${LIMIT}`)
    .then((resp) => resp.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
  return res;
};
const getCharacterInfo = async (idCharacter) => {
  const res = await fetch(`${URL_CHARACTER_INFO}${idCharacter}`)
    .then((resp) => resp.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
  return res;
};
const getCharactersSearch = async (search) => {
  const res = await fetch(`${URL_CHARACTERS_SEARCH + search}`)
    .then((resp) => resp.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
  return res;
};
export { getCharacters, getCharacterInfo, getCharactersSearch };
