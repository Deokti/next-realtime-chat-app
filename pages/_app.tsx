import "macro-css";
import "../styles/globals.scss";
import "../theme/theme.css";
import "@fontsource/roboto";

import React from "react";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@emotion/react";
import { MUI } from "../theme/MUI";
import { AnimatePresence, motion } from "framer-motion";
import { APP_TRANSITION_PAGE } from "../config/FRAMER";

function App({ Component, pageProps, router }: AppProps): React.ReactElement {
  return (
    <ThemeProvider theme={MUI}>
      <AnimatePresence exitBeforeEnter>
        <motion.div {...APP_TRANSITION_PAGE} key={router.route}>
          <Component {...pageProps} />
          <Toaster />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
