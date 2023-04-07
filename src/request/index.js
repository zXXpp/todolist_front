import http from './http'
export function test(data = {}, utils = {}) {
    return http({
        url: '/test',
        method: 'get',
        data,
        ...utils,
    })
}
/**
 * 注册接口
 * @param {*} data 
 * @param {*} utils 
 * @returns 
 */
export function register(data = {}, utils = {}) {
    return http({
        url: '/user/register',
        method: 'post',
        data,
        noToken: true,
        ...utils,
    })
}
/**
 * 登陆接口
 * @param {*} data 
 * @param {*} utils 
 * @returns 
 */
export function login(data = {}, utils = {}) {
    return http({
        url: '/user/login',
        method: 'post',
        data,
        noToken: true,
        ...utils,
    })
}

/**
 * 后端测试接口
 * @param {*} data 
 * @param {*} utils 
 * @returns 
 */
export function getUserInfo(data = {}, utils = {}) {
    return http({
        url: '/info/getUserInfo',
        method: 'get',
        data,
        ...utils,
    })
}
