import { Children9 } from '../../urls/flybridge/children[9]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children9.variant2)
export const initialMaterial = new MeshBasicMaterial({ map: initialTexture })