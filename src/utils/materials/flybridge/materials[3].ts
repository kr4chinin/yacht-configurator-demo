import { Children3 } from '../../urls/flybridge/Children[3]'
import { TextureLoader, MeshBasicMaterial, Texture } from 'three'
import { setWrapAndRepeat } from '../../../helpers/setWrapAndRepeat'

const initialTexture = new TextureLoader().load(Children3.variant4)
setWrapAndRepeat(initialTexture, 3)
export const initialMaterial3 = new MeshBasicMaterial({ map: initialTexture })

const gentleWhitePlanks = new TextureLoader().load(Children3.variant1)
setWrapAndRepeat(gentleWhitePlanks, 3)
export const gentleWhitePlanksMaterial3 = new MeshBasicMaterial({
	map: gentleWhitePlanks
})

const darkWoodPlanks = new TextureLoader().load(Children3.variant2)
setWrapAndRepeat(darkWoodPlanks, 3)
export const darkWoodPlanksMaterial3 = new MeshBasicMaterial({
	map: darkWoodPlanks
})

const spruceWoodPlanks = new TextureLoader().load(Children3.variant3)
setWrapAndRepeat(spruceWoodPlanks, 3)
export const spruceWoodPlanksMaterial3 = new MeshBasicMaterial({
	map: spruceWoodPlanks
})

const crystalGrayPlanks = new TextureLoader().load(Children3.variant5)
setWrapAndRepeat(crystalGrayPlanks, 3)
export const crystalGrayPlanksMaterial3 = new MeshBasicMaterial({
	map: crystalGrayPlanks
})

const darkOakTexture = new TextureLoader().load(Children3.variant6)
setWrapAndRepeat(darkOakTexture, 3)
export const darkOakPlanksMaterial3 = new MeshBasicMaterial({
	map: darkOakTexture
})
