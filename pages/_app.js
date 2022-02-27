import Head from 'next/head';
import Script from 'next/script';
import MouseContextProvider from '../context/mouse-context';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <MouseContextProvider>
      <Script
        type='module'
        src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
      ></Script>
      <Script
        nomodule
        src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'
      ></Script>
      <Component {...pageProps} />
    </MouseContextProvider>
  );
}

export default MyApp;
