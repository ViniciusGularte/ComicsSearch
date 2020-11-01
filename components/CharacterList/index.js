import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import {
  Container,
  CharacterCard,
  BannerImage,
  CharacterCardTextContent,
  CardTextName,
  CardTextFooter,
  LoadingItem,
} from "./styles";
import StarIcon from "../../assets/starIcon";
const CharacterList = ({ Itens }) => {
  const [characters, setCharacters] = useState({
    results: [],
  });

  const [loading, setLoading] = useState(false);
  const setLoadingTrue = () => setLoading(true);
  const setLoadingFalse = () => setLoading(false);

  const router = useRouter();
  useEffect(() => {
    if (Itens) {
      if (Itens.error !== "OK") {
        // Handle error
      } else {
        setCharacters({
          ...characters,
          results: [...characters.results, ...Itens.results],
          offset: Itens.offset,
          number_of_total_results: Itens.number_of_total_results,
        });
      }
    }
  }, [Itens]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  useEffect(() => {
    Router.events.on("routeChangeStart", setLoadingTrue);
    Router.events.on("routeChangeComplete", setLoadingFalse);
    return () => {
      Router.events.off("routeChangeStart", setLoadingTrue);
      Router.events.off("routeChangeComplete", setLoadingFalse);
    };
  }, []);

  const handleScroll = () => {
    const lastCharacter = document.querySelector(
      ".characters-list > .characters:last-child"
    );
    if (lastCharacter) {
      const lastUserLoadedOffset =
        lastCharacter.offsetTop + lastCharacter.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;
      if (pageOffset > lastUserLoadedOffset) {
        if (
          characters.offset < characters.number_of_total_results &&
          !loading
        ) {
          const query = router.query;
          query.offset = parseInt(characters.offset) + 50;
          router.push({
            pathname: router.pathname,
            query: query,
          });
        }
      }
    }
  };
  return (
    <>
      <Container className="characters-list">
        {characters &&
          characters.results &&
          characters.results.length > 0 &&
          characters.results.map((character, i) => {
            return (
              <CharacterCard className="characters" key={i}>
                <BannerImage background={character.image.medium_url} />

                <CharacterCardTextContent>
                  <CardTextName>
                    {character.name} <hr />
                  </CardTextName>
                  <CardTextFooter href="#">Ver mais</CardTextFooter>
                </CharacterCardTextContent>
              </CharacterCard>
            );
          })}
      </Container>
      {loading && <LoadingItem> Carregando ... </LoadingItem>}
    </>
  );
};
export default CharacterList;
