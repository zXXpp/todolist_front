import axios from "axios";
//警告器
import { message } from 'antd';




const baseURL = window.config.baseUrl
//在每次的请求中添加token 
//设置请求头 
const service = axios.create({
    baseURL: baseURL,
    timeout: 15000,
    responseType: 'json',
    withCredentials: false
})
//请求拦截器
service.interceptors.request.use(
    config => {
        //token相关
        const token = window.localStorage.getItem('token') || window.sessionStorage.getItem('token');
        if (config.method === 'get') {
            config.params = config.data
        }
        if (token && !config.noToken) {
            config.headers.Authorization = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            //唯一的成功标识符
            if (response.data.code === '0000') {
                return Promise.resolve(response.data)
            }
            //失败的操作
            switch (response.data.code) {
                case "401":
                    reLogin()
                    break
                default:
                    message.open({
                        type: 'error',
                        content: response.data.msg,
                    })
            }
            return Promise.reject(response)
        } else {
            showError(response.data.msg)
            return Promise.reject(response)
        }
    },
    error => {
        showError(error.response)
        return Promise.reject(error.response)
    }
)


function showError(res) {
    if (res && res.data && res.data.msg) {
        message.open({
            type: 'error',
            content: res.data.msg,
        })
    } else {
        message.open({
            type: 'error',
            content: '网络错误，请联系管理员',
        })
    }
}

function reLogin() {
    if (window.location.pathname === '/login') return
    // return
    localStorage.clear()
    window.location.replace(`/login?redirect=${encodeURIComponent(window.location.href)}`)
}
export default service