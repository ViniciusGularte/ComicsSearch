import styled from "styled-components";
const Container = styled.div`
  background-color: ${(props) => props.theme.surface};
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 22px 0px rgba(148, 148, 148, 0.51);
  padding: 32px;
`;
const CharacterInfoContent = styled.div`
  display: flex;
  align-self: flex-start;
  flex: 1;
  flex-direction: column;
`;
const CharacterInfoText = styled.div`
  display: flex;
  font-size: 18px;
  padding: 10px 10px 10px 5px;

  flex: 1;
  margin-bottom: 4px;
`;
const CharacterInfoInput = styled.input`
  display: flex;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  flex: 1;
  margin-bottom: 4px;
`;
const CharacterInfoInputSelect = styled.select`
  display: flex;
  background-color: white;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  flex: 1;
  margin-bottom: 4px;
`;
const CharacterDescription = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  flex: 1;
  max-width: 60vw;
  a {
    color: inherit;
    text-decoration: inherit;
    pointer-events: none;
    cursor: vertical-text;
  }
  figure {
    margin: 0;
    a {
      img {
        @media screen and (min-width: 20em) {
          max-width: 12.5em;
        }
        @media screen and (min-width: 40em) {
          max-width: 18.5em;
        }
        @media screen and (min-width: 60em) {
          max-width: 20.5em;
        }
      }
    }
  }
  @media screen and (min-width: 60em) {
    max-width: calc(80% - 1rem);
  }
  @media screen and (min-width: 40em) {
    max-width: calc(100% - 1rem);
  }
`;
const CharacterAge = styled.div`
  display: flex;
  flex: 1;
`;
const CharacterImg = styled.img`
  object-fit: contain;
  display: flex;
  flex-direction: row;
  border-radius: 10%;
  height: 150px;
  border: 3px solid #eee;
  box-shadow: 0px 0px 22px 0px rgba(148, 148, 148, 0.51);
  margin-bottom: 16px;
`;
const ContainerTextAndButtons = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  @media screen and (max-width: 40em) {
    flex-direction: column;
  }
`;
const ContainerButton = styled.div`
  display: flex;
  align-self: baseline;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 40em) {
    flex-direction: row;
  }
`;
const Button = styled.button`
  flex: 1;
  padding: 10px;
  border-radius: 50%;
  margin: 4px;
  border: none;
  cursor: pointer;
`;
const ButtonEdit = styled(Button)`
  background-color: ${(props) => props.theme.warning};
`;
const ButtonFavorite = styled(Button)`
  background-color: ${(props) =>
    props.is_favorite ? props.theme.warning : null};
`;
const ContainerArrowGoBack = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  svg {
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.4);
    }
  }
`;
export {
  Container,
  CharacterInfoText,
  CharacterInfoInputSelect,
  ContainerTextAndButtons,
  CharacterInfoInput,
  CharacterAge,
  CharacterImg,
  CharacterDescription,
  CharacterInfoContent,
  ContainerButton,
  ButtonEdit,
  ButtonFavorite,
  ContainerArrowGoBack,
};
