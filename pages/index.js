import { getCharacters, getCharactersSearch } from "../api/index";
import CharacterList from "../components/CharacterList/CharacterListPagination";
import CharacterSearch from "../components/CharacterList/CharacterSearch";
import CharacterGroupAction from "../components/CharacterList/CharacterGroupActions";
import { Container } from "../assets/globalStyles/styles";
export async function getServerSideProps({ query }) {
  const offset = query.offset || 0;
  const search = query.search || "";
  const favorite = query.favorite || false;
  if (favorite === "true") {
    return {
      props: {
        is_search: false,
        only_favorite: true,
        characters: [],
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

const Home = ({ characters, is_search, only_favorite }) => {
  return (
    <Container>
      <CharacterSearch />
      <CharacterGroupAction />
      <CharacterList
        only_favorite={only_favorite}
        is_search={is_search}
        Itens={characters}
      />
    </Container>
  );
};
export default Home;
