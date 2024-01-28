import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (<>
    <Head>
      <title>Home | SprengerV</title>
      <meta name="description" content="Home | SprengerV" />
    </Head>
    <div className="container-fluid">
      <div className="row">
        <Image src="/#" className="img-fluid col-md-5" />
      </div>
      <div className="row">
        <h1>
          SprengerV.com
        </h1>
      </div>
      <div className="row">
        <Image src="/#" className="img-fluid col-md-5" />
      </div>
    </div>
  </>)
}
