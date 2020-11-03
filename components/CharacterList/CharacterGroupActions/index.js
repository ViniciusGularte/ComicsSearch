import React, { useState } from "react";
import {
  Container,
  ContainerCheckbox,
  LabelCheckbox,
  InputCheckbox,
  InputCheckboxSlider,
} from "./styles";
import { useRouter } from "next/router";
import customUseEffectUpdate from "../../../hooks/customUseEffect";
const CharacterGroupAction = () => {
  const router = useRouter();
  const [onlyFavorites, setOnlyFavorites] = useState(false);
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

  return (
    <Container>
      <LabelCheckbox>Mostrar apenas favoritos: </LabelCheckbox>

      <ContainerCheckbox>
        <InputCheckbox type="checkbox" checked={onlyFavorites} />
        <InputCheckboxSlider onClick={toogleFavorites} active={onlyFavorites} />
      </ContainerCheckbox>
    </Container>
  );
};
export default CharacterGroupAction;
