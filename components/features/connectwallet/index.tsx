import { useState } from 'react';
import { Select } from 'antd';
import WalletHeader from 'components/features/walletheader';
import Button from 'components/shared/button';
import { Networks, NetworkDetail } from 'service/walletconnect/types';

import styles from './connectwallet.module.scss';


const { Option } = Select;
const networks = Object.values(Networks);
export default function ConnectWallet(): JSX.Element {
    const [selectedNetwork, setSelectedNetwork] = useState<Networks>(Networks.LocalHost);
    const selectNetwork = (network: Networks) => {
        setSelectedNetwork(network);
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.title}>choose network</p>
                <p>different network will have different gas fee and speed <br />
                    make sure your needs before connecting a network
                </p>
                <Select className={styles.selectNetwork} defaultValue={networks[0]} onChange={selectNetwork}>
                    {networks && networks.map((network: string, index) => {
                        return <Option key={index} value={network}>{network}</Option>
                    })}
                </Select>
                <p className={styles.title}> Connect wallet</p>
                <p>connect wallet and choose a network below to deploy your vote </p>
                <WalletHeader network={selectedNetwork} />
            </div>

        </div>
    );
}
