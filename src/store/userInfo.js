import { makeAutoObservable } from 'mobx'
class UserInfoStore {
    nickName = ''
    email = ''
    sex = ''
    constructor() {
        // 响应式绑定
        makeAutoObservable(this)
    }
    setUserInfo(info) {
        Object.assign(this, info)
    }
}
const userInfoStore = new UserInfoStore()
export default userInfoStore