import Head from 'next/head'
import type { AppProps } from 'next/app'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Okidok</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
