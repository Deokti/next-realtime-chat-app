import React from "react";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "../store";
import "macro-css";
import "../styles/globals.scss";
import "../theme/theme.scss";
import { ThemeProvider } from "@emotion/react";
import { MUI } from "../theme/MUI";

function App({ Component, pageProps }: AppProps): React.ReactElement {
	return (
		<Provider store={store}>
			<ThemeProvider theme={MUI}>
				<Component {...pageProps} />
				<Toaster />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
