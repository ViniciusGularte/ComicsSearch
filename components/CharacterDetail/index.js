import React, { useState } from "react";
import {
  Container,
  CharacterInfoContent,
  CharacterInfoText,
  CharacterImg,
  CharacterDescription,
  ContainerButton,
  ContainerTextAndButtons,
  CharacterInfoInput,
  CharacterInfoInputSelect,
  ButtonEdit,
  ButtonFavorite,
  ContainerArrowGoBack,
} from "./styles";
import { faStar, faEdit, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { addCharacter } from "../../store/characters/action";
import customUseEffectUpdate from "../../hooks/customUseEffect";
import { useRouter } from "next/router";
import NotificationManager from "../../widget/notifications";
const CharacterCard = ({ characterInfo }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const stateCharacters = useSelector((state) => state.characters);
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    id: characterInfo.results.id,
    name:
      stateCharacters[characterInfo.results.id] &&
      stateCharacters[characterInfo.results.id].name
        ? stateCharacters[characterInfo.results.id].name
        : characterInfo.results.name,
    gender:
      stateCharacters[characterInfo.results.id] &&
      stateCharacters[characterInfo.results.id].gender
        ? stateCharacters[characterInfo.results.id].gender
        : characterInfo.results.gender,
    real_name:
      stateCharacters[characterInfo.results.id] &&
      stateCharacters[characterInfo.results.id].real_name
        ? stateCharacters[characterInfo.results.id].real_name
        : characterInfo.results.real_name,
    aliases:
      stateCharacters[characterInfo.results.id] &&
      stateCharacters[characterInfo.results.id].aliases
        ? stateCharacters[characterInfo.results.id].aliases
        : characterInfo.results.aliases,
    birth:
      stateCharacters[characterInfo.results.id] &&
      stateCharacters[characterInfo.results.id].birth
        ? stateCharacters[characterInfo.results.id].birth
        : characterInfo.results.birth,
    image: characterInfo.results.image.medium_url,
  });
  customUseEffectUpdate(() => {
    const timeout = setTimeout(() => {
      dispatch(
        addCharacter(
          form.id,
          form.name,
          form.gender,
          form.real_name,
          form.aliases,
          form.birth,
          form.image,
          stateCharacters[form.id] && stateCharacters[form.id].is_favorite
            ? true
            : false
        )
      );
    }, 4000);
    return () => clearTimeout(timeout);
  }, [form]);
  const toogleEdit = () => {
    setEdit(!edit);
  };
  const changeFavorite = () => {
    if (
      stateCharacters[form.id] &&
      stateCharacters[form.id].is_favorite === true
    ) {
      NotificationManager("warning", "😔	 Removed from favorites");
      dispatch(
        addCharacter(
          form.id,
          form.name,
          form.gender,
          form.real_name,
          form.aliases,
          form.birth,
          form.image,
          false
        )
      );
    } else {
      NotificationManager("success", " 😊	 Added to favorites");

      dispatch(
        addCharacter(
          form.id,
          form.name,
          form.gender,
          form.real_name,
          form.aliases,
          form.birth,
          form.image,
          true
        )
      );
    }
  };
  const sendHome = (e) => {
    router.push("/");
  };

  const changeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <Container>
      <ContainerArrowGoBack>
        <FontAwesomeIcon
          onClick={sendHome}
          color={"blue"}
          size={"1x"}
          icon={faArrowLeft}
        />
      </ContainerArrowGoBack>

      <CharacterImg src={characterInfo.results.image.medium_url} />
      <ContainerTextAndButtons>
        {edit ? (
          <CharacterInfoContent>
            <CharacterInfoInput
              onChange={changeInput}
              name="name"
              placeholder="Name"
              value={form.name}
            />
            <CharacterInfoInput
              onChange={changeInput}
              placeholder="Real name"
              name="real_name"
              value={form.real_name}
            />
            <CharacterInfoInput
              onChange={changeInput}
              placeholder="Birth"
              name="birth"
              type="date"
              value={form.birth}
            />
            <CharacterInfoInputSelect
              onChange={changeInput}
              placeholder="Gender"
              name="gender"
              type="select"
              value={form.gender}
            >
              <option value="0">Woman</option>
              <option value="1">Man</option>
            </CharacterInfoInputSelect>
            <CharacterInfoInput
              onChange={changeInput}
              placeholder="Aliases"
              name="aliases"
              value={form.aliases}
            />
          </CharacterInfoContent>
        ) : (
          <CharacterInfoContent>
            <CharacterInfoText>Name: {form.name}</CharacterInfoText>
            <CharacterInfoText>Real Name: {form.real_name}</CharacterInfoText>
            <CharacterInfoText>
              Birth: {form.birth ? form.birth : "--"}
            </CharacterInfoText>
            <CharacterInfoText>
              Gender: {form.gender === 1 ? "Man" : "Woman"}
            </CharacterInfoText>
            <CharacterInfoText>Aliases: {form.aliases}</CharacterInfoText>
          </CharacterInfoContent>
        )}
        <ContainerButton>
          <ButtonEdit onClick={toogleEdit}>
            <FontAwesomeIcon color={"white"} size={"1x"} icon={faEdit} />
          </ButtonEdit>
          <ButtonFavorite
            is_favorite={
              stateCharacters[form.id] && stateCharacters[form.id].is_favorite
            }
            onClick={changeFavorite}
          >
            <FontAwesomeIcon color={"white"} size={"1x"} icon={faStar} />
          </ButtonFavorite>
        </ContainerButton>
      </ContainerTextAndButtons>
      <CharacterDescription
        dangerouslySetInnerHTML={{
          __html: characterInfo.results.description,
        }}
      />
    </Container>
  );
};
export default CharacterCard;
