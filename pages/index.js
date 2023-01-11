import { Inter } from '@next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Result Riase - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className=''>
        hello
      </body>

    </>
  )
}
