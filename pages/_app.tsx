import type { AppProps } from 'next/app'
import Layouts from '@/components/layouts'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import 'antd/dist/antd.css'
import '@/css/tailwind.css'
import '@/css/icons.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </ThemeProvider>
  )
}

export default MyApp
