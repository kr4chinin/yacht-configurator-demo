import { Children6 } from '../../urls/flybridge/Children_6'
import { TextureLoader, MeshBasicMaterial, MeshMatcapMaterial } from 'three'

// Flybridge visor

// initial texture
const andesiteTexture = new TextureLoader().load(Children6.matcap3)
export const andesiteMaterial6 = new MeshMatcapMaterial({
	matcap: andesiteTexture
})

const neonBlueTexture = new TextureLoader().load(Children6.matcap1)
export const neonBlueMaterial6 = new MeshMatcapMaterial({
	matcap: neonBlueTexture
})

const bloodyRedTexture = new TextureLoader().load(Children6.matcap2)
export const bloodyRedMaterial6 = new MeshMatcapMaterial({
	matcap: bloodyRedTexture
})

const stainlessSteel = new TextureLoader().load(Children6.matcap4)
export const stainlessSteelMaterial6 = new MeshMatcapMaterial({
	matcap: stainlessSteel
})

const redCarbonTexture = new TextureLoader().load(Children6.basic5)
export const redCarbonMaterial6 = new MeshBasicMaterial({
	map: redCarbonTexture
})
