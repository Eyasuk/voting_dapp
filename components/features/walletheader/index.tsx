import { useState } from 'react';
import { Button } from 'antd';
import { WalletOutlined } from '@ant-design/icons'
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import WalletModal from 'components/shared/modal';
import { Wallets, Networks, NetworkDetail } from 'service/walletconnect/types';
import WalletHeaderProps from './types';

import styles from './walletheader.module.scss';

declare global {
    interface Window {
        ethereum: any;
    }
};

export default function WalletHeader({ network }: WalletHeaderProps): JSX.Element {
    const { activate, active, chainId, account } = useWeb3React();
    const [connectModal, setConnectModal] = useState<boolean>(false);

    const openWalletModal = (): void => {
        setConnectModal(!connectModal);
    };

    const onCancel = (): void => {
        setConnectModal(false);
    };

    const abbreviateWalletAddress = (string: string): string => {
        return string?.slice(0, 5) + '...' + string?.slice(string.length - 4);
    };


    async function connectWallet(walletType: Wallets): Promise<boolean> {
        let connector: AbstractConnector;

        if (!network) {
            network = Networks.Polygon;
        }
        if (walletType == Wallets.MetaMask) {
            connector = new InjectedConnector({
                supportedChainIds: [parseInt(NetworkDetail[network].chainId, 16)],
            });
            if (window.ethereum && window.ethereum.networkVersion != parseInt(NetworkDetail[network].chainId, 16)) {
                console.log(NetworkDetail[network])
                //change network
                console.log(window.ethereum.request)
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            ...NetworkDetail[network]
                        },
                    ],
                });
            }
        } else {
            connector = new WalletConnectConnector({
                rpc: NetworkDetail[network].rpcUrls,
                bridge: 'https://bridge.walletconnect.org',
                qrcode: true,
            });
        }

        await activate(
            connector,
            (err) => {
                console.log(err);
                return false;
            }
        );
        setConnectModal(!connectModal);
        return true;
    };

    return (
        <>
            <div className={styles.container}>
                {active ? <p>{abbreviateWalletAddress(account ?? '')}</p> : <Button className={styles.button} type="primary" size='middle' icon={<WalletOutlined />} onClick={openWalletModal}>wallet</Button>}
            </div>
            <WalletModal isModalVisible={connectModal} cancel={onCancel} openWallet={connectWallet} />
        </>
    );
}