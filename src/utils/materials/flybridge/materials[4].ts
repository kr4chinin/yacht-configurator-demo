import { Children4 } from '../../urls/flybridge/Children[4]'
import { TextureLoader, MeshBasicMaterial, MeshMatcapMaterial } from 'three'

const initialTexture = new TextureLoader().load(
	'https://raw.githubusercontent.com/nidorx/matcaps/master/1024/1D2424_565F66_4E555A_646C6E.png'
)
export const initialMaterial4 = new MeshMatcapMaterial({
	matcap: initialTexture
})

const wildGreenTexture = new TextureLoader().load(
	'https://raw.githubusercontent.com/nidorx/matcaps/master/1024/181F1F_475057_616566_525C62.png'
)
export const wildGreenMaterial4 = new MeshMatcapMaterial({
	matcap: wildGreenTexture
})

const sunnyGreenTexture = new TextureLoader().load(Children4.variant2)
export const sunnyGreenMaterial4 = new MeshBasicMaterial({
	map: sunnyGreenTexture
})

const skyBlackTexture = new TextureLoader().load(Children4.variant3)
export const skyBlackMaterial4 = new MeshBasicMaterial({ map: skyBlackTexture })

const papyrusGreenTexture = new TextureLoader().load(Children4.variant4)
export const papyrusGreenMaterial4 = new MeshBasicMaterial({
	map: papyrusGreenTexture
})

const darkCloudsTexture = new TextureLoader().load(Children4.variant5)
export const darkCloudsMaterial4 = new MeshBasicMaterial({
	map: darkCloudsTexture
})

const asphaltGrayTexture = new TextureLoader().load(Children4.variant6)
export const asphaltGrayMaterial4 = new MeshBasicMaterial({
	map: asphaltGrayTexture
})
