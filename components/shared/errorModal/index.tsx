import { Modal } from 'antd';
import NextImage from 'next/image';
import Link from 'next/link';

import styles from './errormodal.module.scss';
export default function ErrorModal({ isModalVisible, cancel, message }: any): JSX.Element {

    return (
        <Modal className={styles.container} visible={isModalVisible} footer={null} onCancel={cancel} closable={false}>
            <div className={styles.upperSide}>
                <div className={styles.logo}>
                    <NextImage src='/cancel-close-10374.svg' width={100} height={100} alt='logo' />
                </div>

                <i className={styles.messageTitle}></i>
                <h3 > Error </h3>
            </div>
            <div className={styles.lowerSide}>
                <p className={styles.message}>
                    {message}
                </p>
                <Link href={'/'} >back to home</Link>
            </div>
        </Modal >
    );
}