import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
export default function backgroundModel() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const glft = useLoader(GLTFLoader, 'ethereum/f.gltf');
    return (
        <primitive object={glft.scene} scale={0.0039} />
    );
}