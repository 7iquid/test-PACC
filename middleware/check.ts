export default defineNuxtRouteMiddleware(() => {
    const store = useUserDataStore()
    if (store.$state.username) {
      console.log('store welcome', store.$state)
      return navigateTo('/welcome')
    } 
  }) 