import React from "react";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "../store";
import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps): React.ReactElement {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
			<Toaster />
		</Provider>
	);
}

export default App;
