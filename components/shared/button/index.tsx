import styles from './button.module.scss';

export default function Button({ text, onClick, disabled, submit }: any): JSX.Element {
    let button;
    submit ? button =
        <button className={styles.container} onClick={onClick} disabled={disabled} type='submit'>{text}</button>
        : button =
        <button className={styles.container} onClick={onClick} disabled={disabled}>{text}</button>

    return button;
}