import { useRouter } from 'next/router';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Button from 'components/shared/button';
import Model from 'components/shared/backgroundModel';

import styles from './home.module.scss';
export default function Home(): JSX.Element {
    const router = useRouter();
    const navigateCreateNew = () => {

        router.push('./new')
    }
    return (

        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.left}>
                    <p className={styles.title}>
                        Vote Free Control <br /> Your Future.
                    </p>
                    <p className={styles.description}>
                        fully decentralized voting space builted <br /> on ethereum blockchain making voting <br /> anonymous and trustable.
                    </p>
                    <div className={styles.buttons}>
                        <Button text="vote" />
                        <Button text="create new" onClick={navigateCreateNew} />
                    </div>
                </div>
                <div className={styles.model}>
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model />
                            <Environment preset="city" />
                        </Suspense>
                        <OrbitControls autoRotate />
                    </Canvas>
                </div>
            </div>




        </div>



    );
}