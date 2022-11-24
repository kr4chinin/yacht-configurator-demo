import { Children5 } from '../../urls/flybridge/Children_5'
import { TextureLoader, MeshBasicMaterial } from 'three'
import { setWrapAndRepeat } from '../../../helpers/setWrapAndRepeat'

// Couch

// initial texture
const bourbonLeatherTexture = new TextureLoader().load(Children5.basic1)
setWrapAndRepeat(bourbonLeatherTexture, 0.1)
export const bourbonLeatherMaterial5 = new MeshBasicMaterial({
	map: bourbonLeatherTexture
})

const darkCashemereTexture = new TextureLoader().load(Children5.basic2)
setWrapAndRepeat(darkCashemereTexture, 0.1)
export const darkCashemereMaterial5 = new MeshBasicMaterial({
	map: darkCashemereTexture
})

const brownLeatherTexture = new TextureLoader().load(Children5.basic3)
setWrapAndRepeat(brownLeatherTexture, 0.1)
export const brownLeatherMaterial5 = new MeshBasicMaterial({
	map: brownLeatherTexture
})

const tannedLeatherTexture = new TextureLoader().load(Children5.basic4)
setWrapAndRepeat(tannedLeatherTexture, 0.1)
export const tannedLeatherMaterial5 = new MeshBasicMaterial({
	map: tannedLeatherTexture
})

const blueMarlineTexture = new TextureLoader().load(Children5.basic5)
setWrapAndRepeat(blueMarlineTexture, 0.4)
export const blueMarlineMaterial5 = new MeshBasicMaterial({
	map: blueMarlineTexture
})

const beigeLeatherTexture = new TextureLoader().load(Children5.basic6)
setWrapAndRepeat(beigeLeatherTexture, 0.8)
export const beigeLeatherMaterial5 = new MeshBasicMaterial({
	map: beigeLeatherTexture
})
