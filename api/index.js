const URL =
  "https://comicvine.gamespot.com/api/characters/?api_key=34ed2d8cc9fd46b45b240441ca80dc7474d005a9&format=json";
const getCharacters = async () => {
  const res = await fetch(`${URL}`)
    .then((resp) => resp.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
  return res;
};
export { getCharacters };
