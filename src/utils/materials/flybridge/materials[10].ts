import { Children10 } from '../../urls/flybridge/Children[10]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children10.variant3)
export const initialMaterial10 = new MeshBasicMaterial({ map: initialTexture })

const redCarbonTexture = new TextureLoader().load(Children10.variant1)
export const redCarbonMaterial10 = new MeshBasicMaterial({ map: redCarbonTexture })

const midnightSkyTexture = new TextureLoader().load(Children10.variant2)
export const midnightSkyMaterial10 = new MeshBasicMaterial({ map: midnightSkyTexture })
