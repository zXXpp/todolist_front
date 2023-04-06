import http from './http'
/**
 * 
 * @param {*} data 数据体
 * @param {*} utils 额外参数
 * @returns 
 */
export function register(data = {}, utils = {}){
    return http({
        url: '/user/register',
        method: 'post',
        data,
        ...utils,
    })
}

export function login(data = {}, utils = {}){
    return http({
        url: '/user/login',
        method: 'post',
        data,
        ...utils,
    })
}


export function test(data = {}, utils = {}){
    return http({
        url: '/test',
        method: 'get',
        data,
        ...utils,
    })
}
