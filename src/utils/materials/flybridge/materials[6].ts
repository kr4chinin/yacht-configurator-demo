import { Children6 } from '../../urls/flybridge/Children[6]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children6.variant5)
export const initialMaterial6 = new MeshBasicMaterial({ map: initialTexture })

const redCarbonTexture = new TextureLoader().load(Children6.variant1)
export const redCarbonMaterial6 = new MeshBasicMaterial({
	map: redCarbonTexture
})

const sunnyGreenTexture = new TextureLoader().load(Children6.variant2)
export const sunnyGreenMaterial6 = new MeshBasicMaterial({
	map: sunnyGreenTexture
})

const brownRedTexture = new TextureLoader().load(Children6.variant3)
export const brownRedMaterial6 = new MeshBasicMaterial({ map: brownRedTexture })

const asphaltGrayTexture = new TextureLoader().load(Children6.variant4)
export const asphaltGrayMaterial6 = new MeshBasicMaterial({
	map: asphaltGrayTexture
})

const grayCarbonTexture = new TextureLoader().load(Children6.variant6)
export const grayCarbonMaterial6 = new MeshBasicMaterial({
	map: grayCarbonTexture
})
