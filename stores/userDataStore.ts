import { defineStore } from 'pinia';

export const useUserDataStore = defineStore('main', {
  state: () => ({
    username: '',
    auth: '',
  }),
  actions: {
    login(username: string, auth: string) {
      this.username = username;
      this.auth = auth;
    },
    logout() {
      this.username = '';
      this.auth = '';
    },
  },
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
})