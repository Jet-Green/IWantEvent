import { defineStore } from 'pinia'

export const useAppStateStore = defineStore({
  id: 'appStateStore',
  state: () => ({
    isMobile: false
  }),
  getters: {
  },
  actions: {
    setMobileType() {
      this.isMobile = true
    },
    unsetMobileType() {
      this.isMobile = false
    }
  }
})
