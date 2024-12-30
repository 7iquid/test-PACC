import { defineStore } from 'pinia';

export const useUserDataStore = defineStore('main', {
  state: () => ({
    username: '',
    auth: '',
  }),
  actions: {
    login(username: string, auth: string) {
      this.$state = { username, auth };
    },
    logout() {
      this.$state = { username: '', auth: '' };
    },
  },
  persist: {
    storage: piniaPluginPersistedstate.cookies(),
  },
})