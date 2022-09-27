import { Children5 } from '../urls/children[5]'
import { TextureLoader, MeshBasicMaterial, MeshStandardMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children5.variant5)
export const initialMaterial = new MeshBasicMaterial({ map: initialTexture })