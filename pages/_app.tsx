import type { AppProps } from 'next/app';
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core';
import Header from 'components/shared/header';

import 'antd/dist/antd.css';
import '../styles/globals.scss';
function MyApp({ Component, pageProps }: AppProps) {
  const getLibrary = (provider: any): Web3 => {
    return new Web3(provider);
  };
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Header>
        <Component {...pageProps} />
      </Header>
    </Web3ReactProvider>);
}

export default MyApp