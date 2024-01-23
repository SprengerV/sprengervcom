import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Navbar from '../components/Navbar.js'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width" initial-scale="1" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
  </>)
}

export default MyApp
