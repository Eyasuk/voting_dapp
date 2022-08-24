import { Button } from 'antd';
import { WalletOutlined } from '@ant-design/icons'
import { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import WalletModal from 'components/shared/modal';
import styles from './walletheader.module.scss';

const injected = new InjectedConnector({
    supportedChainIds: [1, 2, 3, 4, 5, 6],
});
export default function WalletHeader(): JSX.Element {
    const { activate, active, account, chainId, deactivate } = useWeb3React();
    const [connectModal, setConnectModal] = useState<boolean>(false);
    const handleClick = (): void => {
        console.log("o");

        setConnectModal(!connectModal);
    };
    const onCancel = (): void => {
        setConnectModal(false);
    };
    const openMetaMask = async (): Promise<void> => {

        await activate(
            injected,
            (err) => {
                console.log(err)
            }, true
        );

    };
    const openWallet = async (some: string): Promise<void> => {

        if (some === 's') {

            await openMetaMask();
        }
    };

    return (
        <>
            <div className={styles.container}>
                <Button className={styles.button} type="primary" size='middle' icon={<WalletOutlined />} onClick={handleClick}>wallet</Button>
            </div>
            <WalletModal isModalVisible={connectModal} cancel={onCancel} openWallet={openWallet} />
        </>
    );
}