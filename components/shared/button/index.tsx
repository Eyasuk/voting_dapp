import styles from './button.module.scss';

export default function Button({ text }: any): JSX.Element {
    return (
        <button className={styles.container} >{text}</button>
    );
}