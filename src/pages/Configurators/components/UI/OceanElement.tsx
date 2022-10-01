import { useRef, useMemo, RefObject } from 'react'
import { extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Water } from 'three/examples/jsm/objects/Water.js'
import { Object3DNode } from '@react-three/fiber'

extend({ Water })

declare global {
	namespace JSX {
		interface IntrinsicElements {
			water: Object3DNode<Water, typeof Water>
		}
	}
}

const OceanElement = () => {
	const ref = useRef<Water>()
	const gl = useThree(state => state.gl)
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
		[waterNormals, gl.outputEncoding]
	)
	useFrame((_, delta) => {
		if (ref && ref.current) {
			ref.current.material.uniforms.time.value += delta / 5
		}
	})
	return (
		<>
			<water
				ref={ref as RefObject<Water>}
				args={[geom, config]}
				rotation-x={-Math.PI / 2}
				position={[0, 0, 0]}
			/>
		</>
	)
}

export default OceanElement
