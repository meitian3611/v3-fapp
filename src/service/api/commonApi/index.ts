// 全局共用API 整理
import axios from '@/service/axios'
import * as T from './types'

const getCommonApi: T.ICommonApi = {
    // 数据及人员权限
    getPermList() {
        return axios.get('/account/common/data-perm')
    }
}

export default getCommonApi
