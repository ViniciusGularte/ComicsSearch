import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const InputContainer = styled.div`
  width: 100%;
  bottom: -10px;
  padding: 10px 15px;
  background: #fff;
  border-radius: 40px;
  overflow: hidden;
  z-index: 2;
  -webkit-box-shadow: 0px 0px 22px 0px rgba(148, 148, 148, 0.51);
  -moz-box-shadow: 0px 0px 22px 0px rgba(148, 148, 148, 0.51);
  box-shadow: 0px 0px 22px 0px rgba(148, 148, 148, 0.51);
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  svg {
    color: #7c7c7d;
    padding: 5px;
    font-size: 10pt;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
  }
  &:hover,
  &.focused {
    -webkit-box-shadow: 0px 0px 12px 0px rgba(17, 17, 170, 0.51);
    -moz-box-shadow: 0px 0px 12px 0px rgba(17, 17, 170, 0.51);
    box-shadow: 0px 0px 12px 0px rgba(17, 17, 170, 0.51);
    svg {
      color: black;
      transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
      font-size: 14pt;
    }
  }
  &:after {
    padding: 5px;
    font-size: 10pt;
  }
`;
const Input = styled.input`
  border: 0px;
  float: right;
  width: calc(100% - 48px);
  margin-top: 3px;
  margin-right: 10px;
  outline: 0px;
  font-weight: 700;
  font-size: 12pt;
  position: relative;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
`;
export { Container, Input, InputContainer };
