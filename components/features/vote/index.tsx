import { AbiItem } from 'web3-utils';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import abi from 'abi/abi.json';
import WalletModal from 'components/shared/modal';
import Votes from 'components/shared/voteCards';
import { getVotes } from 'service/vote';

import styles from './vote.module.scss';

export default function Vote(): JSX.Element {
    const [data, setData] = useState([]);
    const { active } = useWeb3React();
    useEffect(() => {
        votes();

    }, [])

    const votes = async () => {
        const d = await getVotes(5777);
        setData(d.data);
    };


    return (
        <div className={styles.container}>
            {
                data.length != 0 && data.map((info, index) => {
                    return <Votes key={index} data={info} id={index} />;
                })

            }
        </div>


    );
}