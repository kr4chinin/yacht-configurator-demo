import * as THREE from 'three'

export const setWrapAndRepeat = (texture: THREE.Texture, repeatCount: number) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set(repeatCount, repeatCount)
}