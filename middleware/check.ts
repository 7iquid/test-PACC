export default defineNuxtRouteMiddleware(() => {
    const store = useUserDataStore()
    console.log('store check', store.$state)
    if (store.$state.username) {
      return navigateTo('/welcome')
    } 
  }) 