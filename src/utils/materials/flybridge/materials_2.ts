import { Children2 } from '../../urls/flybridge/Children_2'
import { TextureLoader, MeshBasicMaterial, MeshMatcapMaterial } from 'three'

// Fender

// initial texture
const andesiteTexture = new TextureLoader().load(Children2.basic1)
export const andesiteMaterial2 = new MeshBasicMaterial({
  map: andesiteTexture
})

const blueMarlineTexture = new TextureLoader().load(Children2.matcap2)
export const blueMarlineMaterial2 = new MeshMatcapMaterial({
  matcap: blueMarlineTexture
})


