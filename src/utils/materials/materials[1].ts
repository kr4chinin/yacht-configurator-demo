import { Children1 } from '../urls/children[1]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children1.variant2)
export const initialMaterial = new MeshBasicMaterial({ map: initialTexture })
