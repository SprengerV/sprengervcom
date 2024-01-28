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
        <div className="col-12 col-md-5 ms-auto me-auto me-md-5">
          <Image src="/#" className="img-fluid float-end" width="400" height="300"/>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mx-auto">
          <h1 className="text-center">
            SprengerV.com
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col col-md-5 ms-auto ms-md-5 me-auto justify-content-end">
          <Image src="/#" className="img-fluid" width="400" height="300"/>
        </div>  
      </div>
    </div>
  </>)
}
