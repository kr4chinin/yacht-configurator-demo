import { Children0 } from '../../urls/flybridge/Children[0]'
import { TextureLoader, MeshBasicMaterial, MeshMatcapMaterial } from 'three'

const initialTexture = new TextureLoader().load(
	'https://raw.githubusercontent.com/nidorx/matcaps/master/1024/3B3C3F_DAD9D5_929290_ABACA8.png'
)
export const initialMaterial0 = new MeshMatcapMaterial({ matcap: initialTexture })

const erasedSteelTexture = new TextureLoader().load(Children0.variant2)
export const erasedSteelMaterial0 = new MeshBasicMaterial({
	map: erasedSteelTexture
})

const darkSteelTexture = new TextureLoader().load(Children0.variant3)
export const darkSteelMaterial0 = new MeshBasicMaterial({
	map: darkSteelTexture
})
