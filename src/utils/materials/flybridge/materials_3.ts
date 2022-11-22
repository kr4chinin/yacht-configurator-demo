import { Children3 } from '../../urls/flybridge/Children_3'
import { TextureLoader, MeshBasicMaterial } from 'three'
import { setWrapAndRepeat } from '../../../helpers/setWrapAndRepeat'

// Cockpit floor

// initial texture
const oakPlanksTexture = new TextureLoader().load(Children3.basic1)
setWrapAndRepeat(oakPlanksTexture, 3)
export const oakPlanksMaterial3 = new MeshBasicMaterial({
	map: oakPlanksTexture
})

const demiSeasonTeakTexture = new TextureLoader().load(Children3.basic2)
setWrapAndRepeat(demiSeasonTeakTexture, 3)
export const demiSeasonTeakMaterial3 = new MeshBasicMaterial({
	map: demiSeasonTeakTexture
})

const burnedTeak = new TextureLoader().load(Children3.basic3)
setWrapAndRepeat(burnedTeak, 3)
export const burnedTeakMaterial3 = new MeshBasicMaterial({
	map: burnedTeak
})

const redWoodTexture = new TextureLoader().load(Children3.basic4)
setWrapAndRepeat(redWoodTexture, 3)
export const redWoodMaterial3 = new MeshBasicMaterial({
	map: redWoodTexture
})

const darkOakTexture = new TextureLoader().load(Children3.basic5)
setWrapAndRepeat(darkOakTexture, 3)
export const darkOakMaterial3 = new MeshBasicMaterial({
	map: darkOakTexture
})
