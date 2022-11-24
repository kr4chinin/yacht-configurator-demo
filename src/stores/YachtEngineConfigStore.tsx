import { makeAutoObservable } from "mobx";

class YachtEngineConfigStore {
  constructor() {
    makeAutoObservable(this)
  }
}

export const flybridgeEngineConfigStore = new YachtEngineConfigStore()