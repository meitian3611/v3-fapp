// 全局共用API 整理
import axios from '@/service/axios'
import * as T from './types'

const getCommonApi: T.ICommonApi = {
    // 数据及人员权限
    getPermList() {
        return axios.get('/account/common/data-perm')
    },
    // 科目列表
    getSelectAccount(params) {
        return axios.get('/account/pl-select/account', params)
    },
    // 用户信息
    getUsersInfo(params) {
        return axios.get('/userInfo/getUsersByName', params)
    },
}

export default getCommonApi
