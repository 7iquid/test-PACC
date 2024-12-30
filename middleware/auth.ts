export default defineNuxtRouteMiddleware(() => {
  const store = useUserDataStore()
  if (!store?.$state?.username) {
    return navigateTo('/')
  }
}) 