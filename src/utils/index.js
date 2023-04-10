import { getUserInfo } from '../request/index'
/**
 * 登录函数
 * @param {String} token 登录的token
 * @param {String} url 登陆到的目标地址 默认参数是到'/home'
 */
export async function front_login(token, url = '/home') {
    try {
        localStorage.setItem('token', token)
        localStorage.removeItem('userInfo')
        const { data, code } = await getUserInfo()
        if (code === '0000') {
            console.log();
            localStorage.setItem('userInfo', JSON.stringify(data))
        }
    } catch (error) {
        window.location.replace('/login')
    } finally {
        window.location.replace(url)
    }
}

/**
 * 退出登录的函数
 */
export function front_loginOut() {
    localStorage.clear()
    sessionStorage.clear()
    window.location.replace('/login')
}