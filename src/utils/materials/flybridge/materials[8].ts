import { Children8 } from '../../urls/flybridge/children[8]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children8.variant2)
export const initialMaterial = new MeshBasicMaterial({ map: initialTexture })
