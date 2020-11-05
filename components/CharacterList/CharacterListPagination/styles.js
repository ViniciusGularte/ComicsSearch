import styled from "styled-components";

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
const ContainerSearchView = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const ContainerSearchViewText = styled.div`
  flex: 1;
  align-self: center;
  font-size: 16px;
  font-weight: bold;
`;
const ContainerSearchViewButton = styled.button`
  font-size: 16px;
  border: none;
  background: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  flex: 1;
  color: ${(props) => props.theme.primary};
`;
export {
  ContainerSearchView,
  ContainerSearchViewText,
  ContainerSearchViewButton,
  LoadingItem,
};
