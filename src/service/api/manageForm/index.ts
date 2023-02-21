//login.ts
import axios from '@/service/axios'
import * as T from './types'

const getManageList: T.IManageListApi = {
    // 科目管理表单分页列表
    getList(params) {
        return axios.get('/account/manager/page', params)
    }
}

export default getManageList
