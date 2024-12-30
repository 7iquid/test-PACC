export default defineNuxtRouteMiddleware(() => {
  const store = useUserDataStore()
  console.log('store', store.$state)
  if (!store?.$state?.username) {
    return navigateTo('/')
  } 
}) 