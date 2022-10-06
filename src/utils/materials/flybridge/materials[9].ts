import { Children9 } from '../../urls/flybridge/Children[9]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children9.variant2)
export const initialMaterial9 = new MeshBasicMaterial({ map: initialTexture })

const blueTexture = new TextureLoader().load(Children9.variant2)
export const blueMaterial9 = new MeshBasicMaterial({
	map: blueTexture,
	transparent: true,
	opacity: 0.7
})

const dirtyTexture = new TextureLoader().load(Children9.variant3)
export const dirtyMaterial9 = new MeshBasicMaterial({
	map: dirtyTexture,
	transparent: true,
	opacity: 0.7
})
