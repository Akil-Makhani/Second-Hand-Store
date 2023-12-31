import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Second Hand Store</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
