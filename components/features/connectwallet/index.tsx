import web3 from 'web3';
import styles from './connectwallet.module.scss';
export default function ConnectWallet(): JSX.Element {
    return (
        <div className={styles.container}>
            <p className={styles.title}> Connect wallet</p>
        </div>
    );
}