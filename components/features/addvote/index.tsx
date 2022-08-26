import { Steps } from 'antd'
import { useState } from 'react';
import ConnectWallet from 'components/features/connectwallet';

import styles from './addvote.module.scss';
import CreateVote from 'components/features/createvote';

const { Step } = Steps;
export default function AddVote(): JSX.Element {
    const [step, setStep] = useState<number>(1);
    return (
        <div className={styles.container}>
            <div className={styles.left}>

                <Steps current={step} direction="vertical" className={styles.steps}>
                    <Step className={step == 0 ? styles.active : styles.notactive} title="connect wallet" />
                    <Step className={step == 1 ? styles.active : styles.notactive} title="create vote" />
                    <Step className={step == 2 ? styles.active : styles.notactive} title="deploy" />
                </Steps>

            </div>
            <div className={styles.right}>{

                step == 0 ? <ConnectWallet /> :
                    step == 1 ? <CreateVote /> : <div>2</div>

            }

            </div>
        </div>
    );
}