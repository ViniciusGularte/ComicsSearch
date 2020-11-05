import React from "react";
import { wrapper } from "../store/store";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import { PageTransition } from "next-page-transitions";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

const theme = {
  primary: "#3378b5",
  secondary: "#7c7c7d",
  surface: "#ffffff",
  warning: "#EA9436",
};
const MyApp = ({ Component, pageProps }) => {
  const store = useStore((state) => state);
  const router = useRouter();
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <PageTransition
          skipInitialTransition
          timeout={300}
          classNames="page-transition"
        >
          <Component key={router.pathname} {...pageProps} />
        </PageTransition>
      </ThemeProvider>
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
          transform: translate3d(0, 20px, 0);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity 300ms, transform 300ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity 300ms;
        }
      `}</style>
    </PersistGate>
  );
};

export default wrapper.withRedux(MyApp);
