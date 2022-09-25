import * as THREE from 'three'
import water from '../assets/textures/water.jpeg'
import steel from '../assets/textures/steel-stainless.jpeg'
import floorWood from '../assets/textures/floor-wood.jpg'
import lightLeather from '../assets/textures/light-leather.jpeg'
import glass from '../assets/textures/glass.jpeg'
import steelSecondary from '../assets/textures/steel-secondary.jpeg'
import darkWood from '../assets/textures/dark-wood.jpeg'
import orangeLeather from '../assets/textures/orange-leather.jpeg'
import darkMetal from '../assets/textures/dark-metal.jpeg'

const waterTexture = new THREE.TextureLoader().load(water)
const waterMaterial = new THREE.MeshStandardMaterial({
	map: waterTexture
})

const steelTexture = new THREE.TextureLoader().load(steel)
const steelMaterial = new THREE.MeshStandardMaterial({
	map: steelTexture
})

export const oilSlickMaterial = new THREE.MeshNormalMaterial()

const floorWoodTexture = new THREE.TextureLoader().load(floorWood)
const floorWoodMaterial = new THREE.MeshStandardMaterial({
	map: floorWoodTexture
})

const lightLeatherTexture = new THREE.TextureLoader().load(lightLeather)
const lightLeatherMaterial = new THREE.MeshStandardMaterial({
	map: lightLeatherTexture
})

const glassTexture = new THREE.TextureLoader().load(glass)
export const glassMaterial = new THREE.MeshStandardMaterial({
	map: glassTexture
})

const steelSecondaryTexture = new THREE.TextureLoader().load(steelSecondary)
const steelSecondaryMaterial = new THREE.MeshStandardMaterial({
	map: steelSecondaryTexture
})

const darkWoodTexture = new THREE.TextureLoader().load(darkWood)
const darkWoodMaterial = new THREE.MeshStandardMaterial({
	map: darkWoodTexture
})

const orangeLeatherTexture = new THREE.TextureLoader().load(orangeLeather)
const orangeLeatherMaterial = new THREE.MeshStandardMaterial({
	map: orangeLeatherTexture
})

const darkMetalTexture = new THREE.TextureLoader().load(darkMetal)
const darkMetalMaterial = new THREE.MeshStandardMaterial({
	map: darkMetalTexture
})

export const materials = {
	water: waterMaterial,
	steel: steelMaterial,
	oilSlick: oilSlickMaterial,
	floorWood: floorWoodMaterial,
	lightLeather: lightLeatherMaterial,
	glass: glassMaterial,
	steelSecondary: steelSecondaryMaterial,
	darkWood: darkWoodMaterial,
	orangeLeather: orangeLeatherMaterial,
	darkMetal: darkMetalMaterial
}
