import { Children0 } from '../../urls/flybridge/children[0]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children0.variant1)
export const initialMaterial = new MeshBasicMaterial({ map: initialTexture })
