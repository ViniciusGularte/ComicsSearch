import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const CharacterCard = styled.div`
  cursor: pointer;
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
    transform: scale(1.2);
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

export { Container, CharacterCard, BannerImage };
