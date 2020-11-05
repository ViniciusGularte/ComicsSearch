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
const ContainerError = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  div {
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: type 0.5s alternate infinite;
  }
  @keyframes type {
    from {
      box-shadow: inset -3px 0px 0px #888;
    }
    to {
      box-shadow: inset -3px 0px 0px transparent;
    }
  }
`;

export { Container, BodyStyle, ContainerError };
