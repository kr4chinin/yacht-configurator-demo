import { Children6 } from '../urls/children[6]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children6.variant2)
export const initialMaterial = new MeshBasicMaterial({ map: initialTexture })