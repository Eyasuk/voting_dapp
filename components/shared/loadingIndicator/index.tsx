import styles from './loadingIndicator.module.scss';
export default function LoadingIndicator(): JSX.Element {

    return (
        <div className={styles.container}>
            <div className={styles.type5}>
                <div className={styles.pulse1}></div>
                <div className={styles.pulse2}></div>
                <div className={styles.pulse3}></div>
                <div className={styles.pulse4}></div>
            </div>

        </div>
    );
}