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
  ContainerSearchView,
  ContainerSearchViewText,
  ContainerSearchViewButton,
} from "./styles";
import Link from "next/link";
import { useSelector } from "react-redux";

const CharacterList = ({ Itens, is_search, only_favorite }) => {
  const [characters, setCharacters] = useState({
    results: [],
  });
  const [viewSearchResults, setViewSearchResults] = useState(false);
  const [toogleSearchResults, setToogleSearchResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const setLoadingTrue = () => setLoading(true);
  const setLoadingFalse = () => setLoading(false);
  const router = useRouter();
  const stateCharacters = useSelector((state) => state.characters);
  const toogleViewSearchResults = () => {
    setViewSearchResults(false);
  };
  useEffect(() => {
    if (Itens) {
      if (only_favorite) {
        const array_characters_store = Object.values(stateCharacters);
        const array_characters_favorite = array_characters_store.filter(
          (character) => character.is_favorite
        );
        setToogleSearchResults(true);
        setCharacters({
          results: array_characters_favorite,
        });
      } else if (Itens.error !== "OK") {
        // Handle error
      } else {
        if (is_search) {
          setViewSearchResults(true);
          setToogleSearchResults(true);
          setCharacters({
            results: Itens.results,
            offset: Itens.offset,
            number_of_total_results: Itens.number_of_total_results,
          });
        } else {
          setCharacters({
            ...characters,
            results: toogleSearchResults
              ? Itens.results
              : [...characters.results, ...Itens.results],
            offset: Itens.offset,
            number_of_total_results: Itens.number_of_total_results,
          });
          setToogleSearchResults(false);
        }
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
      {viewSearchResults && is_search ? (
        <ContainerSearchView>
          <ContainerSearchViewText>
            Founded {characters.results.length} characters
          </ContainerSearchViewText>
          {characters.results.length > 0 ? (
            <ContainerSearchViewButton onClick={toogleViewSearchResults}>
              Click here to view
            </ContainerSearchViewButton>
          ) : null}
        </ContainerSearchView>
      ) : (
        <Container className="characters-list">
          {characters &&
            characters.results &&
            characters.results.length > 0 &&
            characters.results.map((character, i) => {
              return (
                <CharacterCard className="characters" key={i}>
                  <BannerImage
                    background={
                      only_favorite
                        ? character.image
                        : character.image.medium_url
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
                      <Link
                        href={`/character/${encodeURIComponent(character.id)}`}
                      >
                        See More
                      </Link>
                    </CardTextFooter>
                  </CharacterCardTextContent>
                </CharacterCard>
              );
            })}
        </Container>
      )}
      {loading && !is_search && !only_favorite && (
        <LoadingItem> Loading ... </LoadingItem>
      )}
    </>
  );
};
export default CharacterList;
