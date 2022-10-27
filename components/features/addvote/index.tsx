import { Steps } from 'antd'
import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import ConnectWallet from 'components/features/connectwallet';
import AddCandidate from 'components/features/addcandidate';
import CreateVote from 'components/features/createvote';
import Button from 'components/shared/button';
import { useAddVote } from 'context/addVote';

import styles from './addvote.module.scss';
import DeployVote from '../deployvote';

const { Step } = Steps;
export default function AddVote(): JSX.Element {
    const { active } = useWeb3React();
    const { step, initialStep } = useAddVote();

    useEffect(() => {
        if (!active) {
            initialStep;
        }

    }, [active, initialStep]);

    return (
        <div className={styles.container}>
            <div className={styles.left}>

                <Steps current={step} direction="vertical" className={styles.steps}>
                    <Step className={step == 0 ? styles.active : styles.notactive} title="connect wallet" />
                    <Step className={step == 1 ? styles.active : styles.notactive} title="create vote" />
                    <Step className={step == 2 ? styles.active : styles.notactive} title="add candinate" />
                    <Step className={step == 3 ? styles.active : styles.notactive} title="deploy" />
                </Steps>

            </div>
            <div className={styles.right}>{
                step == 0 ? <ConnectWallet /> :
                    step == 1 ? <CreateVote /> :
                        step == 2 ? <AddCandidate /> :
                            step == 3 ? <DeployVote /> : <div> </div>
            }
            </div>
        </div>
    );
}