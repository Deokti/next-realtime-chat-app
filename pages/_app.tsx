import React from 'react';
import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.scss';


function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <Toaster />
    </React.Fragment>
  );
}

export default App;
