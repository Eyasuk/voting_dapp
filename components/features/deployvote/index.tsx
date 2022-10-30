import { useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { useAddCandidate } from 'context/addcandidate';
import { useNewVote } from 'context/newvoteinfo';
import Button from 'components/shared/button';
import LoadingIndicator from 'components/shared/loadingIndicator';
import WalletModal from 'components/shared/modal';
import SuccessModal from 'components/shared/successModal';
import ErrorModal from 'components/shared/errorModal';
import { useAddVote } from 'context/addVote';
import { deployVote } from 'service/vote'
import { usePageStatus } from 'context/pages';

import styles from './deployvote.module.scss';

export default function DeployVote(): JSX.Element {
    const { chainId } = useWeb3React();
    const { voteInfo, } = useNewVote();
    const { candidates } = useAddCandidate();
    const { backStep, nextStep, step } = useAddVote();
    const { isLoading } = usePageStatus();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [voteDeployed, setVoteDeployed] = useState<boolean>(false);
    const startDate = new Date(parseInt(voteInfo.startDate) * 1000)
    const endDate = new Date(parseInt(voteInfo.endDate) * 1000)


    const deploy = async () => {
        setLoading(true);

        const respone = await deployVote(chainId || 5777, {
            name: voteInfo.voteName,
            noOfCandidate: 1,
            startingDate: parseInt(voteInfo.startDate),
            endingDate: parseInt(voteInfo.endDate),
            candidates: candidates,
            descrption: 's',
            imageUrl: voteInfo.voteImage
        })

        setLoading(false);

        if (respone.success) {
            setVoteDeployed(true);
        }
        else {
            setError(true)
        }

    }

    return (
        <>  {loading && <LoadingIndicator />}
            <h1>{voteInfo.voteName}</h1><div className={styles.container}>

                <div className={styles.elements}>
                    <h2>max voter</h2>
                    {voteInfo.maxVoter == -1 ? <p className={styles.max}>no limit</p> : voteInfo.maxVoter}

                </div>

                <div className={styles.elements}>
                    <h2>duration</h2>
                    <p>{startDate.toDateString()}</p>
                    <p >to</p >
                    <p>{endDate.toDateString()}</p>

                </div>

                <div className={styles.elements}>
                    <h2>candidates</h2>
                    <p className={styles.candidate}> {candidates.length}</p>

                </div>

            </div>
            <Button text='back' onClick={backStep} />
            <Button text='deploy' onClick={deploy} />
            <ErrorModal isModalVisible={error} cancel={null} message={'error occured try again'} />

            <SuccessModal isModalVisible={voteDeployed} cancel={null} message={'Your vote is created successfully!!'} />
        </>
    );
}