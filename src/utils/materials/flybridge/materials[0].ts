import { Children0 } from '../../urls/flybridge/children[0]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children0.variant1)
export const initialMaterial0 = new MeshBasicMaterial({ map: initialTexture })

const erasedSteelTexture = new TextureLoader().load(Children0.variant2)
export const erasedSteelMaterial0 = new MeshBasicMaterial({ map: erasedSteelTexture })

const darkSteelTexture = new TextureLoader().load(Children0.variant3)
export const darkSteelMaterial0 = new MeshBasicMaterial({ map: darkSteelTexture })