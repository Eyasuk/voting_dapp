import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './voteCard.module.scss';

export default function VoteCard({ data, id }: any): JSX.Element {
    const [voteStatus, setVoteStatus] = useState<string>('');
    const startDate = parseInt(data[2]) * 1000;
    const endDate = parseInt(data[3]) * 1000;

    useEffect(() => {
        if (startDate <= Date.now() && endDate > Date.now()) {
            setVoteStatus('On Going');
        }
        else if (startDate > Date.now()) {
            setVoteStatus('Not Started');
        }
        else {
            setVoteStatus('Ended');
        }
    }, [endDate, startDate]);
    return (
        <div className={styles.container}>
            <div className={styles.overlap}>
                <Link href={`vote/${id + 1}`} title="View Details">View Details</Link>
            </div>
            <div className={styles.image}>
                <img className={styles.img} src={data[6]} />
            </div>
            <div className={styles.content}>
                <span className={styles.title}>{data[0]}</span>
                <span className={styles.pricestart}>{voteStatus}</span>
                <div className={styles.caption}>
                    {data[5]}

                </div >
                <div className={styles.detial}>
                    <span><b>Candidates:</b> </span>
                    <span><b>{data[4]}</b></span>
                </div>
                <div className={styles.detial}>
                    <span><b>Starting Date:</b> </span>
                    <span><b>{new Date(parseInt(data[2]) * 1000).toDateString()}</b></span>
                </div>
                <div className={styles.detial}>
                    <span><b>Ending Date:</b> </span>
                    <span><b>{new Date(parseInt(data[3]) * 1000).toDateString()}</b></span>
                </div>

            </div >
        </div >
    );
}