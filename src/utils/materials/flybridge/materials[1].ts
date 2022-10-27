import { Children1 } from '../../urls/flybridge/Children[1]'
import { TextureLoader, MeshBasicMaterial, MeshMatcapMaterial } from 'three'

// Throttle & steering wheel

// initial texture
const andesiteTexture = new TextureLoader().load(Children1.matcap3)
export const andesiteMaterial1 = new MeshMatcapMaterial({
	matcap: andesiteTexture
})

const blackSapphireTexture = new TextureLoader().load(Children1.matcap1)
export const blackSapphireMaterial1 = new MeshMatcapMaterial({
	matcap: blackSapphireTexture
})

const acquanettaTexture = new TextureLoader().load(Children1.matcap2)
export const acquanettaMaterial1 = new MeshMatcapMaterial({
	matcap: acquanettaTexture
})

const redCarbonTexture = new TextureLoader().load(Children1.basic4)
export const redCarbonMaterial1 = new MeshBasicMaterial({
	map: redCarbonTexture
})
