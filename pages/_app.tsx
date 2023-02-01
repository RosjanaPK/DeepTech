import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CiRA Merchant</title>
        <link rel="shortcut icon" href="../img/favicon.png" />
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
