//封装 $fetch 
const fetch = async (url, options, headers) => {
    try {
        await nextTick() //防止刷新页面时获取不到数据
        const config = useRuntimeConfig()

        const res = await $fetch(url, {
            baseURL: config.public.BASE_API,
            method: options.method,
            params: options.params ?? null,
            body: options.body ?? null,
            headers: headers ?? null,
            //请求拦截
            onRequest({ request, options }) {
                options.headers = options.headers || {}
            },
            //请求错误处理
            onRequestError({ request, options, error }) {
                console.log('服务器连接失败')
                Promise.reject(error)
            },
            //响应拦截
            onResponse({ request, response, options }) {
                Promise.resolve(response._data)
            },
            //响应错误处理
            onResponseError({ request, response, options }) {

            },
        })
        return res
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