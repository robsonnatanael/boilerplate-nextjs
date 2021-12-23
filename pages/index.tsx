import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Boilerplate</title>
        <meta name="description" content="Boilerplate NextJS with TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Boilerplate NextJS with TypeScript
        </h1>
      </main>
    </div>
  )
}

export default Home
