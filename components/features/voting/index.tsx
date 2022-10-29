import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Candidate from 'components/shared/candidate';
import { getVote, voting } from 'service/vote';

import styles from './voting.module.scss';
import Button from 'components/shared/button';

export default function Voting(): JSX.Element {
    const router = useRouter();
    const [vote, setVote] = useState<any>();
    const [selectedCandidate, setSelectedCandidate] = useState();
    const voteId = router.query.slug;
    useEffect(() => {
        (async () => {
            const response = await getVote(voteId);
            if (response.success) {
                setVote(response.data);
            }
        })();
    }, [voteId])

    const handleVote = async () => {
        if (typeof (voteId) == 'string' && selectedCandidate) {
            console.log('')
            const c = await voting(parseInt(voteId), selectedCandidate);
            console.log(c)
        }
    };

    const selectCandidate = async (e: any) => {
        setSelectedCandidate(e.target.value);
    };

    return (
        <div className={styles.container}>
            {vote && <div className={styles.voteInfo}>
                <img className={styles.image} src={vote.voteInfo.imageUrl} alt={vote.voteInfo.name} />
                <h2>{vote.voteInfo.name}</h2>
                <p>{vote.voteInfo.description}</p>
                <div className={styles.detail}>
                    <div className={styles.date}>
                        <h3>Starting Date: {new Date(parseInt(vote.voteInfo.voteStartingDate)).toDateString()}</h3>
                        <h3>Ending Date: {new Date(parseInt(vote.voteInfo.voteEndingDate)).toDateString()}</h3>
                    </div>
                    <form  > {
                        vote.candidate.map((data: any, index: number,) => {
                            return <Candidate key={index} candidate={data} onChange={selectCandidate} id={index + 1} />
                        })
                    }    <div className={styles.button}><Button text='confirm' onClick={handleVote} /></div>

                    </form>

                </div>
            </div>}
        </div >
    );
};