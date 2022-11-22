import { Children9 } from '../../urls/flybridge/Children_9'
import { TextureLoader, MeshBasicMaterial, MeshMatcapMaterial } from 'three'

// Illuminators

// initial texture
const clearGlassTexture = new TextureLoader().load(Children9.matcap1)
export const clearGlassMaterial9 = new MeshMatcapMaterial({
	matcap: clearGlassTexture
})

const tonedGlassTexture = new TextureLoader().load(Children9.basic2)
export const tonedGlassMaterial9 = new MeshBasicMaterial({
	map: tonedGlassTexture
})
