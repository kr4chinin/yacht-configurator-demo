import { Children8 } from '../../urls/flybridge/children[8]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children8.variant2)
export const initialMaterial8 = new MeshBasicMaterial({ map: initialTexture })

const erasedSteel = new TextureLoader().load(Children8.variant1)
export const erasedSteelMaterial8 = new MeshBasicMaterial({ map: erasedSteel })

const asphaltGrayTexture = new TextureLoader().load(Children8.variant3)
export const asphaltGrayMaterial8 = new MeshBasicMaterial({ map: asphaltGrayTexture })