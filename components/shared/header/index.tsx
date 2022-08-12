import NextImage from 'next/image';
import styles from './header.module.scss';

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
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Price</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <main>{children}</main>
        </>

    );
}