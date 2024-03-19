//这里统一管理所有接口
import request from "../utils/request"

//获取新闻列表
export const getNews = (params) => {
    return request.get('/v1/example/index', params)
}

//获取新闻详情
export const getNewsInfo = (params) => {
    return request.get('/v1/example/show', params)
}

//提交联络我们表单
export const submitContactForm = (params) => {
    return request.post('/v1/example/edit', params)
}