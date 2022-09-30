import { Children3 } from '../../urls/flybridge/children[3]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children3.variant4)
export const initialMaterial3 = new MeshBasicMaterial({ map: initialTexture })
