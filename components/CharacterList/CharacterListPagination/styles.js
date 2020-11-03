import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const CharacterCard = styled.div`
  border-radius: 40px;
  border: 3px solid #eee;
  box-shadow: 0px 0px 22px 0px rgba(148, 148, 148, 0.51);
  flex: 1 0 300px;
  margin: 1rem 0.25em;
  height: 100px;
  background-color: white;
  transition: transform 0.2s;
  height: 400px;
  overflow-y: auto;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 40em) {
    max-width: calc(50% - 1rem);
  }

  @media screen and (min-width: 60em) {
    max-width: calc(33% - 1rem);
  }
`;
const BannerImage = styled.div`
  background-image: url(${(props) => props.background});
  height: 275px;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const CharacterCardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 125px;
`;
const CardTextName = styled.span`
  text-align: center;
  color: ${(props) => props.theme.secondary};
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
  flex: 1;
`;

const CardTextFooter = styled.div`
  align-self: auto;
  text-align: center;
  flex: 1;
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    color: ${(props) => props.theme.primary};
  }
`;
const LoadingItem = styled.div`
  display: flex;
  flex: 1;
  margin: 16px;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
  color: ${(props) => props.theme.primary};
`;
const ContainerSearchView = styled.div``;
export {
  Container,
  CharacterCard,
  ContainerSearchView,
  BannerImage,
  CardTextName,
  CardTextFooter,
  CharacterCardTextContent,
  LoadingItem,
};
