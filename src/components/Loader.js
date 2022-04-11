import { Html, useProgress } from '@react-three/drei'

export default () => {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}