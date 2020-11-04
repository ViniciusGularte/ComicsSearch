import styled, { createGlobalStyle } from "styled-components";
const Container = styled.div`
  margin: 0 auto;
  padding: 0 1em;
  @media screen and (min-width: 52em) {
    max-width: ${(props) => (props.characterDetail ? null : "52em")};
  }
`;
const BodyStyle = createGlobalStyle`
  body {
      background-image: url("../images/background.png");
  }
`;

export { Container, BodyStyle };
