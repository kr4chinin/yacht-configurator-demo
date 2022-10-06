import { Children4 } from '../../urls/flybridge/Children[4]'
import { TextureLoader, MeshBasicMaterial, MeshMatcapMaterial } from 'three'

const initialTexture = new TextureLoader().load(
	'https://raw.githubusercontent.com/nidorx/matcaps/master/1024/3B3C3F_DAD9D5_929290_ABACA8.png'
)
export const initialMaterial4 = new MeshMatcapMaterial({
	matcap: initialTexture
})

const wildGreenTexture = new TextureLoader().load(
	'https://raw.githubusercontent.com/nidorx/matcaps/master/1024/5F5F5F_BDBDBD_A4A4A4_9C9C9C.png'
)
export const wildGreenMaterial4 = new MeshMatcapMaterial({
	matcap: wildGreenTexture
})

const sunnyGreenTexture = new TextureLoader().load(
	'https://raw.githubusercontent.com/nidorx/matcaps/master/1024/070B0C_B2C7CE_728FA3_5B748B.png'
)
export const sunnyGreenMaterial4 = new MeshMatcapMaterial({
	matcap: sunnyGreenTexture
})

const skyBlackTexture = new TextureLoader().load(
	'https://raw.githubusercontent.com/nidorx/matcaps/master/1024/2A6276_041218_739BA6_042941.png'
)
export const skyBlackMaterial4 = new MeshMatcapMaterial({
	matcap: skyBlackTexture
})

const papyrusGreenTexture = new TextureLoader().load(
	'https://raw.githubusercontent.com/nidorx/matcaps/master/1024/942967_D292B5_C76E9E_551A4C.png'
)
export const papyrusGreenMaterial4 = new MeshMatcapMaterial({
	matcap: papyrusGreenTexture
})

const darkCloudsTexture = new TextureLoader().load(
	'https://raw.githubusercontent.com/nidorx/matcaps/master/1024/2E763A_78A0B7_B3D1CF_14F209.png'
)
export const darkCloudsMaterial4 = new MeshMatcapMaterial({
	matcap: darkCloudsTexture
})

const asphaltGrayTexture = new TextureLoader().load(Children4.variant6)
export const asphaltGrayMaterial4 = new MeshBasicMaterial({
	map: asphaltGrayTexture
})
