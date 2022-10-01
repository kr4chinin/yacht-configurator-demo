import { Children2 } from '../../urls/flybridge/Children[2]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children2.variant2)
export const initialMaterial2 = new MeshBasicMaterial({ map: initialTexture })

const redCarbonTexture = new TextureLoader().load(Children2.variant1)
export const redCarbonMaterial2 = new MeshBasicMaterial({ map: redCarbonTexture })

const paperWhiteTexture = new TextureLoader().load(Children2.variant3)
export const paperWhiteMaterial2 = new MeshBasicMaterial({ map: paperWhiteTexture })