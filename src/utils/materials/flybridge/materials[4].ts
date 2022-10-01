import { Children4 } from '../../urls/flybridge/Children[4]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children4.variant7)
export const initialMaterial4 = new MeshBasicMaterial({ map: initialTexture })

const wildGreenTexture = new TextureLoader().load(Children4.variant1)
export const wildGreenMaterial4 = new MeshBasicMaterial({ map: wildGreenTexture })

const sunnyGreenTexture = new TextureLoader().load(Children4.variant2)
export const sunnyGreenMaterial4 = new MeshBasicMaterial({ map: sunnyGreenTexture })

const skyBlackTexture = new TextureLoader().load(Children4.variant3)
export const skyBlackMaterial4 = new MeshBasicMaterial({ map: skyBlackTexture })

const papyrusGreenTexture = new TextureLoader().load(Children4.variant4)
export const papyrusGreenMaterial4 = new MeshBasicMaterial({ map: papyrusGreenTexture })

const darkCloudsTexture = new TextureLoader().load(Children4.variant5)
export const darkCloudsMaterial4 = new MeshBasicMaterial({ map: darkCloudsTexture })

const asphaltGrayTexture = new TextureLoader().load(Children4.variant6)
export const asphaltGrayMaterial4 = new MeshBasicMaterial({ map: asphaltGrayTexture })
