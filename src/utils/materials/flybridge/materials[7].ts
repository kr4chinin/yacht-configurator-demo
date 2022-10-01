import { Children7 } from '../../urls/flybridge/Children[7]'
import { TextureLoader, MeshBasicMaterial } from 'three'

const initialTexture = new TextureLoader().load(Children7.variant1)
export const initialMaterial7 = new MeshBasicMaterial({
	map: initialTexture,
	transparent: true,
	opacity: 0.7
})

const blueTexture = new TextureLoader().load(Children7.variant2)
export const blueMaterial7 = new MeshBasicMaterial({
    map: blueTexture,
    transparent: true,
    opacity: 0.7
})

const dirtyTexture = new TextureLoader().load(Children7.variant3)
export const dirtyMaterial7 = new MeshBasicMaterial({
    map: dirtyTexture,
    transparent: true,
    opacity: 0.7
})
