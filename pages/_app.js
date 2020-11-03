import { wrapper } from "../store/store";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
      background-image: url("images/background.png");
  }
`;
const theme = {
  primary: "#3378b5",
  secondary: "#7c7c7d",
};
const MyApp = ({ Component, pageProps }) => {
  const store = useStore((state) => state);
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </PersistGate>
  );
};

export default wrapper.withRedux(MyApp);
