import React from "react";
import { getCharacters, getCharactersSearch } from "../api/index";
import CharacterList from "../components/CharacterList/CharacterListPagination";
import CharacterSearch from "../components/CharacterList/CharacterSearch";
import CharacterGroupAction from "../components/CharacterList/CharacterGroupActions";
import { Container, BodyStyle } from "../assets/globalStyles/styles";
import Header from "../widget/header";
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
        search: search,
        is_search: true,
        only_favorite: false,
      },
    };
  } else {
    const characters = await getCharacters(offset);
    return {
      props: {
        characters,
        is_search: false,
        only_favorite: false,
      },
    };
  }
}

const Home = ({ characters, is_search, search, only_favorite }) => {
  return (
    <Container>
      <Header />
      <BodyStyle />
      <CharacterSearch search={search} />
      <CharacterGroupAction only_favorite={only_favorite} />
      <CharacterList
        only_favorite={only_favorite}
        is_search={is_search}
        Itens={characters}
      />
    </Container>
  );
};
export default Home;
