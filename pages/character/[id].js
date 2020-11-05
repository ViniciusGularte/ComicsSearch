import React from "react";
import { getCharacterInfo } from "../../api/index";
import {
  Container,
  BodyStyle,
  ContainerError,
} from "../../assets/globalStyles/styles";
import CharacterCard from "../../components/CharacterDetail";
import Header from "../../widget/header";

export async function getServerSideProps(context) {
  const characterInfo = await getCharacterInfo(context.query.id);
  return {
    props: { characterInfo },
  };
}

const CharacterInfo = ({ characterInfo }) => {
  return (
    <Container characterDetail>
      <Header
        name={characterInfo.results.name}
        keywords={characterInfo.results.aliases}
      />
      <BodyStyle />
      {characterInfo.error !== "OK" ? (
        <ContainerError>
          <div>Not found</div>{" "}
        </ContainerError>
      ) : (
        <CharacterCard characterInfo={characterInfo} />
      )}
    </Container>
  );
};

export default CharacterInfo;
