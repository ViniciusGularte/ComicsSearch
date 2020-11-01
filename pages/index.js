import { getCharacters } from "../api/index";
import { useSelector, useDispatch } from "react-redux";
import CharacterList from "../components/CharacterList";
import { addCharacter } from "../store/characters/action";
import { Container } from "../assets/globalStyles/styles";
export async function getServerSideProps({ query }) {
  const offset = query.offset || 0;
  console.log(query);
  const characters = await getCharacters(offset);
  return {
    props: {
      characters,
    },
  };
}

export default function Home({ characters }) {
  const globalState = useSelector((state) => state.characters);
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
      <CharacterList Itens={characters} />
    </Container>
  );
}
