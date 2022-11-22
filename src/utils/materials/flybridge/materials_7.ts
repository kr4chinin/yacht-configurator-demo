import { Children7 } from '../../urls/flybridge/Children_7'
import { TextureLoader, MeshBasicMaterial, MeshMatcapMaterial } from 'three'

// Windows

// initial texture
const clearGlassTexture = new TextureLoader().load(Children7.matcap1)
export const clearGlassMaterial7 = new MeshMatcapMaterial({
	matcap: clearGlassTexture,
	opacity: 0.65,
	transparent: true
})

const tonedGlassTexture = new TextureLoader().load(Children7.basic2)
export const tonedGlassMaterial7 = new MeshBasicMaterial({
	map: tonedGlassTexture,
	opacity: 0.65,
	transparent: true
})
