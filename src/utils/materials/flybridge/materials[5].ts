import { Children5 } from '../../urls/flybridge/children[5]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children5.variant5)
export const initialMaterial5 = new MeshBasicMaterial({ map: initialTexture })
