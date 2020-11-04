import { getCharacterInfo } from "../../api/index";
import { Container, BodyStyle } from "../../assets/globalStyles/styles";
import CharacterCard from "../../components/CharacterDetail/CharacterCard";

export async function getServerSideProps(context) {
  const characterInfo = await getCharacterInfo(context.query.id);
  return {
    props: { characterInfo },
  };
}

const CharacterInfo = ({ characterInfo }) => {
  return (
    <Container characterDetail>
      <BodyStyle />
      <CharacterCard characterInfo={characterInfo} />
    </Container>
  );
};

export default CharacterInfo;
