import { Children6 } from '../../urls/flybridge/children[6]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children6.variant5)
export const initialMaterial6 = new MeshBasicMaterial({ map: initialTexture })
