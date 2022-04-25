import React from "react";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import "macro-css";
import "../styles/globals.scss";
import "../theme/theme.css";
import { ThemeProvider } from "@emotion/react";
import { MUI } from "../theme/MUI";
import { store } from "../store";
import { AnimatePresence, motion } from "framer-motion";
import { APP_TRANSITION_PAGE } from "../config/FRAMER";

function App({ Component, pageProps, router }: AppProps): React.ReactElement {
  return (
    <Provider store={store}>
      <ThemeProvider theme={MUI}>
        <AnimatePresence exitBeforeEnter>
          <motion.div {...APP_TRANSITION_PAGE} key={router.route}>
            <Component {...pageProps} />
            <Toaster />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
