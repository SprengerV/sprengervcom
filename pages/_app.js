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
    </Head>
    <ThemeProvider attribute="data-bs-theme">
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  </>)
}

export default MyApp
