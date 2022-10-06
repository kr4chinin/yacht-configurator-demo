import { Children5 } from '../../urls/flybridge/Children[5]'
import { TextureLoader, MeshBasicMaterial } from 'three'
import {setWrapAndRepeat} from '../../../helpers/setWrapAndRepeat'

const initialTexture = new TextureLoader().load(Children5.variant2)
setWrapAndRepeat(initialTexture, 0.1)
export const initialMaterial5 = new MeshBasicMaterial({ map: initialTexture })

const redCarbonTexture = new TextureLoader().load(Children5.variant1)
setWrapAndRepeat(redCarbonTexture, 0.1)
export const redCarbonMaterial5 = new MeshBasicMaterial({ map: redCarbonTexture })

const oistrichLeatherTexture = new TextureLoader().load(Children5.variant3)
setWrapAndRepeat(oistrichLeatherTexture, 0.1)
export const oistrichLeatherMaterial5 = new MeshBasicMaterial({ map: oistrichLeatherTexture })

const redBlanketTexture = new TextureLoader().load(Children5.variant4)
setWrapAndRepeat(redBlanketTexture, 0.1)
export const redBlanketMaterial5 = new MeshBasicMaterial({ map: redBlanketTexture })

const stitchedLeatherTexture = new TextureLoader().load(Children5.variant5)
setWrapAndRepeat(stitchedLeatherTexture, 0.1)
export const stitchedLeatherMaterial5 = new MeshBasicMaterial({ map: stitchedLeatherTexture })

const orangeLeatherTexture = new TextureLoader().load(Children5.variant6)
setWrapAndRepeat(orangeLeatherTexture, 0.1)
export const orangeLeatherMaterial5 = new MeshBasicMaterial({ map: orangeLeatherTexture })

const sandyLeatherTexture = new TextureLoader().load(Children5.variant7)
setWrapAndRepeat(sandyLeatherTexture, 0.1)
export const sandyLeatherMaterial5 = new MeshBasicMaterial({ map: sandyLeatherTexture })

const mildLeatherTexture = new TextureLoader().load(Children5.variant8)
setWrapAndRepeat(mildLeatherTexture, 0.1)
export const mildLeatherMaterial5 = new MeshBasicMaterial({ map: mildLeatherTexture })



