import { Children10 } from '../../urls/flybridge/children[10]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children10.variant3)
export const initialMaterial = new MeshBasicMaterial({ map: initialTexture })
