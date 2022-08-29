import Image from 'next/image';
import { Modal } from 'antd';
import { Wallets, Networks } from 'service/walletconnect/types';
import styles from './modal.module.scss';
export default function WalletModal({ isModalVisible, cancel, openWallet }: any): JSX.Element {

    return (
        <Modal className={styles.container} visible={isModalVisible} footer={null} onCancel={cancel}>
            <div className={styles.modal} >
                <div className={styles.wallets} onClick={event => openWallet(Wallets.MetaMask)}>
                    <Image src='/metamask.svg'
                        width={130}
                        height={130}
                        alt='metamask connect'
                    />
                </div>
                <div className={styles.wallets} onClick={event => openWallet(Wallets.WalletConnect)}>
                    <Image src='/walletconnect.svg'
                        width={100}
                        height={100}
                        alt='wallet connect' />
                    <p>wallet connect</p>
                </div>
                <div className={styles.wallets}></div>
                <div className={styles.wallets}></div></div>

        </Modal >
    );
}