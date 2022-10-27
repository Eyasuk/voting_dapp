import { useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { useAddCandidate } from 'context/addcandidate';
import { useNewVote } from 'context/newvoteinfo';
import Button from 'components/shared/button';
import WalletModal from 'components/shared/modal';
import SuccessModal from 'components/shared/successModal';
import { useAddVote } from 'context/addVote';
import { deployVote } from 'service/vote'

import styles from './deployvote.module.scss';

export default function DeployVote(): JSX.Element {
    const { chainId } = useWeb3React();
    const { voteInfo, } = useNewVote();
    const { candidates } = useAddCandidate();
    const { backStep, nextStep, step } = useAddVote();
    const [voteDeployed, setVoteDeployed] = useState<boolean>(false);
    const startDate = new Date(parseInt(voteInfo.startDate))
    const endDate = new Date(parseInt(voteInfo.endDate))


    const deploy = () => {
        try {
            deployVote(chainId || 5777, {
                name: voteInfo.voteName,
                noOfCandidate: 1,
                startingDate: parseInt(voteInfo.startDate),
                endingDate: parseInt(voteInfo.startDate),
                candidates: candidates,
                descrption: '',
                imageUrl: voteInfo.voteImage
            })
            // setVoteDeployed(true);

        }
        catch (err) {
            console.log(err)
        }
    };
    return (
        <>
            <h1>{voteInfo.voteName}</h1><div className={styles.container}>

                <div className={styles.elements}>
                    {voteInfo.maxVoter == -1 ? <p>no limit</p> : voteInfo.maxVoter}
                    <h4>max voter</h4>
                </div>

                <div className={styles.elements}>
                    <h4>duration</h4>
                    <p>{startDate.toDateString()}</p>
                    <p >to</p >
                    <p>{endDate.toDateString()}</p>
                </div>

                <div className={styles.elements}>
                    <p>{candidates.length}</p>
                    <h4>candidates</h4>
                </div>

                <div className={styles.elements}>
                    <p>{candidates.length}</p>
                    <h4>candidates</h4>
                </div>

            </div>
            <Button text='back' onClick={backStep} />
            <Button text='deploy' onClick={deploy} />
            <SuccessModal isModalVisible={false} cancel={null} message={'Your vote is created successfully!!'} />
        </>
    );
}