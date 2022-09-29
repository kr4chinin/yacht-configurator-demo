import { Children2 } from '../../urls/flybridge/children[2]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children2.variant2)
export const initialMaterial = new MeshBasicMaterial({ map: initialTexture })