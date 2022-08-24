import { Steps } from 'antd'
import { useState } from 'react';
import CreateWallet from 'components/features/connectwallet';

import styles from './createvote.module.scss';

const { Step } = Steps;
export default function CreateVote(): JSX.Element {
    const [step, setStep] = useState<number>(0);
    return (
        <div className={styles.container}>
            <div className={styles.left}>

                <Steps current={step} direction="vertical" className={styles.steps}>
                    <Step className={step == 0 ? styles.active : styles.notactive} title="connect wallet" />
                    <Step className={step == 1 ? styles.active : styles.notactive} title="create vote" />
                    <Step className={step == 2 ? styles.active : styles.notactive} title="deploy" />
                </Steps>

            </div>
            <div className={styles.right}>
                <CreateWallet />
            </div>
        </div>
    );
}