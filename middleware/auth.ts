export default defineNuxtRouteMiddleware(() => {
  const store = useUserDataStore()
  console.log('store auth', store.$state)
  if (!store?.$state?.username) {
    return navigateTo('/')
  } 
}) 