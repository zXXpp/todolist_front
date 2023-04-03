import http from './http'
export function register(data = {}, utils = {}){
    return http({
        url: '/login/register',
        method: 'get',
        data,
        ...utils,
    })
}