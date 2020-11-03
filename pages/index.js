import { getCharacters, getCharactersSearch } from "../api/index";
import { useSelector, useDispatch } from "react-redux";
import CharacterList from "../components/CharacterList";
import CharacterSearch from "../components/CharacterSearch";
import CharacterGroupAction from "../components/CharacterGroupActions";
import { addCharacter } from "../store/characters/action";
import { Container } from "../assets/globalStyles/styles";
export async function getServerSideProps({ query }) {
  const offset = query.offset || 0;

  const search = query.search || "";
  const favorite = query.favorite || false;
  if (favorite === "true") {
    return {
      props: {
        is_search: true,
        only_favorite: true,
      },
    };
  } else if (search) {
    const characters = await getCharactersSearch(search);
    return {
      props: {
        characters,
        is_search: true,
      },
    };
  } else {
    const characters = await getCharacters(offset);
    return {
      props: {
        characters,
        is_search: false,
      },
    };
  }
}

const Home = ({ characters, is_search }) => {
  const globalState = useSelector((state) => state.characters);
  const stateCharacters = useSelector((state) => state.characters);

  const dispatch = useDispatch();

  console.log(globalState);
  if (globalState) {
    // dispatch(
    //   addCharacter(
    //     43434,
    //     "vini",
    //     "f",
    //     "vinicius",
    //     "dbage 02",
    //     "18/04/1996",
    //     false
    //   )
    // );
  }
  return (
    <Container>
      <CharacterSearch />
      <CharacterGroupAction />
      <CharacterList is_search={is_search} Itens={characters} />
    </Container>
  );
};
export default Home;
