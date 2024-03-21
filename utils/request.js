//封装useFetch请求方便管理
const fetch = async (url, options, headers) => {
    try {
        await nextTick() //防止刷新页面时获取不到数据
        const config = useRuntimeConfig()
        const router = useRouter()
        const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about
        const reqUrl = config.public.BASE_URL + url

        const { data, error } = await useFetch(reqUrl, {
            ...options,
        })
        const result = data.value
        if (error.value) {
            return Promise.reject(error)
        }

        if (result) {
            return result

            // if (result.code === -4002) { //未登录则跳转到登入页
            //     router.push({
            //         path: localePath('/login'),
            //         query: {
            //             redirect: encodeURIComponent(router.currentRoute.value)
            //         }
            //     })
            // }
            // else {
            //     return Promise.reject(result)
            // }
        }
    }
    catch(e) {
        return Promise.reject(e)
    }
}

export default {
    get(url, params, headers = {}) {
        return fetch(url, { method: 'GET', params }, headers)
    },
    post(url, body, headers = {}) {
        return fetch(url, { method: 'POST', body}, headers)
    }
}