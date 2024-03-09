export default defineNuxtRouteMiddleware((to, from) => {
    //是否维护中
    const config = useRuntimeConfig()
    let isMaintenance = config.public.MAINTENANCE_MODE;
    if (isMaintenance) {
        if (to.path.startsWith('/') && to.path !== '/maintenance') {
            return navigateTo('/maintenance');
        }
    }
})