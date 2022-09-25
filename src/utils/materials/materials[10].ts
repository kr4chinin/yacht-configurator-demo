import { Children10 } from '../urls/children[10]'
import { TextureLoader, MeshBasicMaterial } from 'three'
//4 
const initialTexture = new TextureLoader().load(Children10.variant4)
export const initialMaterial = new MeshBasicMaterial({ map: initialTexture })