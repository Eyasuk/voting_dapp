import styles from './candidate.module.scss';

export default function Candidate({ candidate, id, onChange }: any): JSX.Element {

    return (
        <div className={styles.container}>
            <img className={styles.image} src={candidate.imageUrl}></img>
            <div className={styles.detail}>
                <h2>{candidate.name}</h2>
                <p>{candidate.description}</p>
            </div>
            <div className={styles.vote}>
                <h4>Votes: {candidate.voteCount}</h4>
                <input className={styles.radio} type='radio' name='candidate' value={id} onChange={onChange}></input>

            </div>
        </div >
    );
};