import { Children3 } from '../../urls/flybridge/Children[3]'
import { TextureLoader, MeshBasicMaterial } from 'three'
import { setWrapAndRepeat } from '../../../helpers/setWrapAndRepeat'

// Cockpit floor

// initial texture
const oakPlanksTexture = new TextureLoader().load(Children3.basic1)
export const oakPlanksMaterial3 = new MeshBasicMaterial({
  map: oakPlanksTexture
})

const demiSeasonTeakTexture = new TextureLoader().load(Children3.basic2)
export const demiSeasonTeakMaterial3 = new MeshBasicMaterial({
  map: demiSeasonTeakTexture
})

const burnedTeak = new TextureLoader().load(Children3.basic3)
export const burnedTeakMaterial3 = new MeshBasicMaterial({
  map: burnedTeak
})

const redWoodTexture = new TextureLoader().load(Children3.basic4)
export const redWoodMaterial3 = new MeshBasicMaterial({
  map: redWoodTexture
})

const darkOakTexture = new TextureLoader().load(Children3.basic5)
export const darkOakMaterial3 = new MeshBasicMaterial({
  map: darkOakTexture
})