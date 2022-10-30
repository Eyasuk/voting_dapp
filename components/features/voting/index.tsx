import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Candidate from 'components/shared/candidate';
import Button from 'components/shared/button';
import LoadingIndicator from 'components/shared/loadingIndicator';
import SuccessModal from 'components/shared/successModal';
import ErrorModal from 'components/shared/errorModal';
import { usePageStatus } from 'context/pages';
import { getVote, voting } from 'service/vote';

import styles from './voting.module.scss';

export default function Voting(): JSX.Element {
    const router = useRouter();
    const [vote, setVote] = useState<any>();
    const [selectedCandidate, setSelectedCandidate] = useState();
    const [error, setError] = useState<boolean>(false);
    const [voteRegistered, setVoteRegistered] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const voteId = router.query.slug;
    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await getVote(voteId);
            if (response.success) {
                setVote(response.data);
            }
            setLoading(false);
        })();
    }, [voteId])

    const handleVote = async () => {
        if (typeof (voteId) == 'string' && selectedCandidate) {
            setLoading(true);
            const response = await voting(parseInt(voteId), selectedCandidate);
            if (response.success) {
                setVoteRegistered(true);
            }
            else {
                setError(true)
            }

        }
        setLoading(false);
    };

    const selectCandidate = async (e: any) => {
        setSelectedCandidate(e.target.value);
    };

    return (
        <>
            {loading && <LoadingIndicator />}
            <div className={styles.container}>
                {vote && <div className={styles.voteInfo}>
                    <img className={styles.image} src={vote.voteInfo.imageUrl} alt={vote.voteInfo.name} />
                    <h2>{vote.voteInfo.name}</h2>
                    <p>{vote.voteInfo.description}</p>
                    <div className={styles.detail}>
                        <div className={styles.date}>
                            <h3>Starting Date: {new Date(parseInt(vote.voteInfo.voteStartingDate) * 1000).toDateString()}</h3>
                            <h3>Ending Date: {new Date(parseInt(vote.voteInfo.voteEndingDate) * 1000).toDateString()}</h3>
                        </div>
                        <form  > {
                            vote.candidate.map((data: any, index: number,) => {
                                return <Candidate key={index} candidate={data} onChange={selectCandidate} id={index + 1} />
                            })
                        }    <div className={styles.button}><Button text='confirm' onClick={handleVote} /></div>

                        </form>

                    </div>
                </div>}
                <SuccessModal isModalVisible={voteRegistered} cancel={null} message={'Your vote registered '} />
                <ErrorModal isModalVisible={error} cancel={null} message={'error occured try again'} />
            </div >
        </>
    );
};