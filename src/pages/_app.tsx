import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
        <title>CommodityStuff</title>
        {/* <link rel='manifest' href='/manifest.json' /> */}
        <meta name="Description" content="APP" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="" /> */}
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
