import WalletHeader from 'components/features/walletheader';
import Button from 'components/shared/button';
import { Networks } from 'service/walletconnect/types';

import styles from './connectwallet.module.scss';

const networks = Object.values(Networks);
export default function ConnectWallet(): JSX.Element {
    return (
        <div className={styles.container}>
            <p className={styles.title}> Connect wallet</p>
            <div className={styles.content}>
                <p>connect wallet and choose a network below to deploy your vote </p>
                <p>different network will have different gas fee and speed <br />
                    make sure your needs before connecting a network
                </p>
                <WalletHeader />
                <p>choose network</p>
                <select name='network'>
                    {networks && networks.map((network: string, index) => {
                        return <option key={index} value={network}>{network}</option>
                    })}

                </select>
                <Button text='next' />
            </div>



        </div>
    );
}