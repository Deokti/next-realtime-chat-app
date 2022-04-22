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
import { motion } from "framer-motion";

function App({ Component, pageProps, router }: AppProps): React.ReactElement {
  return (
    <Provider store={store}>
      <ThemeProvider theme={MUI}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.2,
          }}
          key={router.route}
        >
          <Component {...pageProps} />
          <Toaster />
        </motion.div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
