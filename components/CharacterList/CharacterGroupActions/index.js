import React, { useState, useEffect } from "react";
import {
  Container,
  ContainerCheckbox,
  LabelCheckbox,
  InputCheckbox,
  InputCheckboxSlider,
  LoadingText,
} from "./styles";
import Router, { useRouter } from "next/router";
import customUseEffectUpdate from "../../../hooks/customUseEffect";
const CharacterGroupAction = ({ only_favorite }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const setLoadingTrue = () => setLoading(true);
  const setLoadingFalse = () => setLoading(false);
  const [onlyFavorites, setOnlyFavorites] = useState(
    only_favorite ? true : false
  );
  const toogleFavorites = () => {
    setOnlyFavorites(!onlyFavorites);
  };
  customUseEffectUpdate(() => {
    const query = router.query;
    query.favorite = onlyFavorites;
    router.push({
      pathname: router.pathname,
      query: query,
    });
  }, [onlyFavorites]);
  useEffect(() => {
    Router.events.on("routeChangeStart", setLoadingTrue);
    Router.events.on("routeChangeComplete", setLoadingFalse);
    return () => {
      Router.events.off("routeChangeStart", setLoadingTrue);
      Router.events.off("routeChangeComplete", setLoadingFalse);
    };
  }, []);
  return (
    <Container>
      <Container>
        <LabelCheckbox>Only My Favorites: </LabelCheckbox>

        <ContainerCheckbox>
          <InputCheckbox type="checkbox" checked={onlyFavorites} />
          <InputCheckboxSlider
            onClick={toogleFavorites}
            active={onlyFavorites}
          />
        </ContainerCheckbox>
      </Container>
      {loading ? <LoadingText>Loading ...</LoadingText> : null}
    </Container>
  );
};
export default CharacterGroupAction;
