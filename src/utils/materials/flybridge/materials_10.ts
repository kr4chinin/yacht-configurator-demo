import { Children10 } from '../../urls/flybridge/Children_10'
import { TextureLoader, MeshBasicMaterial, MeshMatcapMaterial } from 'three'

// Cockpit steering wheel

// initial texture
const blackSapphireTexture = new TextureLoader().load(Children10.matcap1)
export const blackSapphireMaterial10 = new MeshMatcapMaterial({
	matcap: blackSapphireTexture
})

const acquanettaTexture = new TextureLoader().load(Children10.matcap2)
export const acquanettaMaterial10 = new MeshMatcapMaterial({
	matcap: acquanettaTexture
})

const andesiteTexture = new TextureLoader().load(Children10.matcap3)
export const andesiteMaterial10 = new MeshMatcapMaterial({
	matcap: andesiteTexture
})

const redCarbonTexture = new TextureLoader().load(Children10.basic4)
export const redCarbonMaterial10 = new MeshBasicMaterial({
	map: redCarbonTexture
})
