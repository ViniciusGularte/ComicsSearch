import { wrapper } from "../store/store";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
      background-image: url("images/background.png");
  }
`;

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <GlobalStyle />
      <Component {...pageProps} />
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
