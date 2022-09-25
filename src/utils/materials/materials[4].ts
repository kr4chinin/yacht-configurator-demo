import { Children4 } from '../urls/children[4]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children4.variant5)
export const initialMaterial = new MeshBasicMaterial({ map: initialTexture })