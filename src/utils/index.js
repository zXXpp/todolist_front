import { getUserInfo } from '../request/index'
export async function front_login(token, url = '/mytodolist') {
    try {
        localStorage.setItem('token', token)
        localStorage.removeItem('userInfo')
        const { data, code } = await getUserInfo()
        if (code === '0000') {
            console.log();
            localStorage.setItem('userInfo', JSON.stringify(data))
        }
    } catch (error) {
        window.location.replace('./login')
    } finally {
        window.location.replace(url)
    }
}