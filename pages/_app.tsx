import Header from 'components/shared/header';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Header> <Component {...pageProps} /> </Header>)
}

export default MyApp
