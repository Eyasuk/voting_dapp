
import { FacebookOutlined, GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import styles from './about.module.scss';


export default function AboutUs(): JSX.Element {
    return (
        <div className={styles.container}>
            <h1>Our Team</h1>
            <div className={styles.row}>

                <div className={styles.col}>
                    <div className={styles.ourteam}>
                        <div className={styles.picture}>
                            <img className={styles.imgfluid} src="https://picsum.photos/130/130?image=1027" />
                        </div>
                        <div className={styles.teamcontent}>
                            <h3 className={styles.name}>Eyasu Kibru</h3>
                            <h4 className={styles.title}>FullStack | BlockChain Developer</h4>
                        </div>
                        <ul className={styles.social}>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" className={styles.fafacebook} aria-hidden="true"><FacebookOutlined /></a></li>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" className={styles.fatwitter} aria-hidden="true"><TwitterOutlined /></a></li>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" className={styles.fagithub} aria-hidden="true"><GithubOutlined /></a></li>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" className={styles.falinkedin} aria-hidden="true"><LinkedinOutlined /></a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.col}>
                    <div className={styles.ourteam}>
                        <div className={styles.picture}>
                            <img className={styles.imgfluid} src="https://picsum.photos/130/130?image=1027" />
                        </div>
                        <div className={styles.teamcontent}>
                            <h3 className={styles.name}>Eba Aseffa</h3>
                            <h4 className={styles.title}>FullStack | BlockChain Developer</h4>
                        </div>
                        <ul className={styles.social}>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" className={styles.fafacebook} aria-hidden="true"><FacebookOutlined /></a></li>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" className={styles.fatwitter} aria-hidden="true"><TwitterOutlined /></a></li>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" className={styles.fagithub} aria-hidden="true"><GithubOutlined /></a></li>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" className={styles.falinkedin} aria-hidden="true"><LinkedinOutlined /></a></li>
                        </ul>
                    </div>
                </div>


            </div >
        </div >


    );
} 