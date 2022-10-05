import { Children3 } from '../../urls/flybridge/Children[3]'
import { TextureLoader, MeshBasicMaterial } from 'three'
import * as THREE from 'three'

const initialTexture = new TextureLoader().load(Children3.variant4)
initialTexture.wrapS = initialTexture.wrapT = THREE.RepeatWrapping
initialTexture.repeat.set(3, 3)
export const initialMaterial3 = new MeshBasicMaterial({ map: initialTexture })
