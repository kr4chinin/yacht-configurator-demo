import { Children5 } from '../../urls/flybridge/Children[5]'
import { TextureLoader, MeshBasicMaterial } from 'three'
import * as THREE from 'three'

const initialTexture = new TextureLoader().load(Children5.variant2)
initialTexture.wrapS = initialTexture.wrapT = THREE.RepeatWrapping
initialTexture.repeat.set(0.1, 0.1)
export const initialMaterial5 = new MeshBasicMaterial({ map: initialTexture })
