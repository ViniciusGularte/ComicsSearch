import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  margin: 8px;
`;
const ContainerCheckbox = styled.div`
  margin-left: 8px;
  position: relative;
  display: inline-block;
  width: 54px;
  height: 28px;
`;
const LabelCheckbox = styled.span`
  font-size: 16;
  color: ${(props) => props.theme.secondary};
`;
const InputCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;
const InputCheckboxSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${(props) => (props.active ? "#2196f3" : "#ccc")};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 24px;
  &:before {
    ${(props) =>
      props.active
        ? `  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
`
        : null}
    border-radius: 50%;
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: ${(props) => props.theme.surface};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;
const LoadingText = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export {
  Container,
  ContainerCheckbox,
  LabelCheckbox,
  LoadingText,
  InputCheckbox,
  InputCheckboxSlider,
};
