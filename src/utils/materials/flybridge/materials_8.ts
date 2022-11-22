import { Children8 } from '../../urls/flybridge/Children_8'
import { TextureLoader, MeshMatcapMaterial } from 'three'

// Counter

// initial texture
const stainlessSteelTexture = new TextureLoader().load(Children8.matcap1)
export const stainlessSteelMaterial8 = new MeshMatcapMaterial({
  matcap: stainlessSteelTexture
})

const blackSteelTexture = new TextureLoader().load(Children8.matcap2)
export const blackSteelMaterial8 = new MeshMatcapMaterial({
  matcap: blackSteelTexture
})

const goldenHorizonTexture = new TextureLoader().load(Children8.matcap3)
export const goldenHorizonMaterial8 = new MeshMatcapMaterial({
  matcap: goldenHorizonTexture
})