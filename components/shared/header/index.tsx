import NextImage from 'next/image';
import WalletHeader from 'components/features/walletheader';
import styles from './header.module.scss';
import { Networks } from 'service/walletconnect/types';
import Link from 'next/link';

export default function Header({ children }: any): JSX.Element {
    return (
        <>
            <nav className={styles.navBar}>
                <div className={styles.logo}>
                    <div className={styles.image}><NextImage src='/logo.svg' layout='fill' alt='logo' /></div>

                    <p className={styles.name}>votmer</p>
                </div>
                <div className={styles.menu} >

                    <ul className={styles.nav}>
                        <WalletHeader network={Networks.LocalHost} />
                        <li className="active"><Link href="/">Home</Link></li>
                        <li><Link href="/about">Our Team</Link></li>
                        <li><Link href="https://github.com/Eyasuk/voting_dapp.git">Contrbute</Link></li>
                    </ul>
                </div>
            </nav>
            <main>{children}</main>
        </>

    );
}