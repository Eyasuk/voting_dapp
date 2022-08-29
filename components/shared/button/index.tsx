import styles from './button.module.scss';

export default function Button({ text, onClick }: any): JSX.Element {
    return (
        <button className={styles.container} onClick={onClick}>{text}</button>
    );
}