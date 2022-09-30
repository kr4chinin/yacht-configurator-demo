import { useRef, useMemo } from 'react'
import { extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Water } from 'three/examples/jsm/objects/Water.js'

extend({ Water })

const OceanElement = () => {
	const ref = useRef()
    const gl = useThree((state) => state.gl);
	const waterNormals = useLoader(
		THREE.TextureLoader,
		'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg'
	)

	waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
	const geom = useMemo(() => new THREE.PlaneGeometry(30000, 30000), [])
	const config = useMemo(
		() => ({
			textureWidth: 512,
			textureHeight: 512,
			waterNormals,
			sunDirection: new THREE.Vector3(),
			sunColor: 0xeb8934,
			waterColor: 0x0064b5,
			distortionScale: 40,
			fog: false,
            format: gl.outputEncoding
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[waterNormals]
	)
	useFrame(
		// @ts-ignore
		(_, delta) => (ref.current.material.uniforms.time.value += delta / 5)
	)
	return (
		<>
            {/* @ts-ignore */}
			<water
				ref={ref}
				args={[geom, config]}
				rotation-x={-Math.PI / 2}
				position={[0, 0, 0]}
			/>
		</>
	)
}

export default OceanElement
