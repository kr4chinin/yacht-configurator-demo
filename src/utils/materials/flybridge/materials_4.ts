import { Children4 } from '../../urls/flybridge/Children_4'
import { TextureLoader, MeshBasicMaterial, MeshMatcapMaterial } from 'three'

// Sides

// initial texture
const andesiteTexture = new TextureLoader().load(Children4.matcap4)
export const andesiteMaterial4 = new MeshMatcapMaterial({
	matcap: andesiteTexture
})

const neonBlueTexture = new TextureLoader().load(Children4.matcap1)
export const neonBlueMaterial4 = new MeshMatcapMaterial({
	matcap: neonBlueTexture
})

const acquanettaTexture = new TextureLoader().load(Children4.matcap2)
export const acquanettaMaterial4 = new MeshMatcapMaterial({
	matcap: acquanettaTexture
})

const bloodyRedTexture = new TextureLoader().load(Children4.matcap3)
export const bloodyRedMaterial4 = new MeshMatcapMaterial({
	matcap: bloodyRedTexture
})

const sunriseTexture = new TextureLoader().load(Children4.matcap5)
export const sunriseMaterial4 = new MeshMatcapMaterial({
	matcap: sunriseTexture
})

const pacificOceanTexture = new TextureLoader().load(Children4.basic6)
export const pacificOceanMaterial4 = new MeshBasicMaterial({
	map: pacificOceanTexture
})
