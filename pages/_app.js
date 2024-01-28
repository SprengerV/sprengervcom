import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Navbar from '../components/Navbar.js';
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js');
  }, []);

  return (<>
    <Head>
      <meta name="viewport" content="width=device-width" initial-scale="1" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <ThemeProvider attribute="data-bs-theme">
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  </>)
}

export default MyApp
