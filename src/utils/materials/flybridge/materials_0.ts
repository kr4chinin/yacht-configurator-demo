import { Children0 } from '../../urls/flybridge/Children_0'
import { TextureLoader, MeshMatcapMaterial } from 'three'

// Siderails & Portlights

// initial texture
const stainlessSteelTexture = new TextureLoader().load(Children0.matcap1)
export const stainlessSteelMaterial0 = new MeshMatcapMaterial({
	matcap: stainlessSteelTexture
})

const blackSteelTexture = new TextureLoader().load(Children0.matcap2)
export const blackSteelMaterial0 = new MeshMatcapMaterial({
	matcap: blackSteelTexture
})

const goldenHorizonTexture = new TextureLoader().load(Children0.matcap3)
export const goldenHorizonMaterial0 = new MeshMatcapMaterial({
	matcap: goldenHorizonTexture
})
