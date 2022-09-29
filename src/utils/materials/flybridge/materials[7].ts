import { Children7 } from '../../urls/flybridge/children[7]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children7.variant1)
export const initialMaterial = new MeshBasicMaterial({
	map: initialTexture,
	transparent: true,
	opacity: 0.7
})
