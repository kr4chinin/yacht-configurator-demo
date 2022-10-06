import { Children1 } from '../../urls/flybridge/Children[1]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children1.variant2)
export const initialMaterial1 = new MeshBasicMaterial({ map: initialTexture })

const midnightSkyTexture = new TextureLoader().load(Children1.variant1)
export const midnightSkyMaterial1 = new MeshBasicMaterial({
	map: midnightSkyTexture
})
