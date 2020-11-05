import React from "react";
import Link from "next/link";
import {
  Container,
  CharacterCard,
  BannerImage,
  CharacterCardTextContent,
  CardTextName,
  CardTextFooter,
} from "./styles";
const List = ({ characters, only_favorite, stateCharacters }) => {
  return (
    <Container className="characters-list">
      {characters &&
        characters.results &&
        characters.results.length > 0 &&
        characters.results.map((character, i) => {
          return (
            <CharacterCard className="characters" key={i}>
              <BannerImage
                background={
                  only_favorite ? character.image : character.image.medium_url
                }
              />
              <CharacterCardTextContent>
                <CardTextName>
                  {stateCharacters[character.id] &&
                  stateCharacters[character.id].name
                    ? stateCharacters[character.id].name
                    : character.name}{" "}
                  <hr />
                </CardTextName>
                <CardTextFooter>
                  <Link href={`/character/${encodeURIComponent(character.id)}`}>
                    See More
                  </Link>
                </CardTextFooter>
              </CharacterCardTextContent>
            </CharacterCard>
          );
        })}
    </Container>
  );
};
export default List;
