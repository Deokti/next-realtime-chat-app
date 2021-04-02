import React from 'react';
import '../styles/globals.scss'


function App({ Component, pageProps }: any) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default App
