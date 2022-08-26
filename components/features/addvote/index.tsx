import { Steps } from 'antd'
import { useState } from 'react';
import ConnectWallet from 'components/features/connectwallet';
import AddCandidate from 'components/features/addcandidate';
import CreateVote from 'components/features/createvote';

import styles from './addvote.module.scss';


const { Step } = Steps;
export default function AddVote(): JSX.Element {
    const [step, setStep] = useState<number>(2);
    return (
        <div className={styles.container}>
            <div className={styles.left}>

                <Steps current={step} direction="vertical" className={styles.steps}>
                    <Step className={step == 0 ? styles.activ : styles.notactive} title="connect wallet" />
                    <Step className={step == 1 ? styles.active : styles.notactive} title="create vote" />
                    <Step className={step == 2 ? styles.active : styles.notactive} title="add candinate" />
                    <Step className={step == 3 ? styles.active : styles.notactive} title="deploy" />
                </Steps>

            </div>
            <div className={styles.right}>{
                step == 0 ? <ConnectWallet /> :
                    step == 1 ? <CreateVote /> :
                        step == 2 ? <AddCandidate /> :
                            <div></div>
            }

            </div>
        </div>
    );
}