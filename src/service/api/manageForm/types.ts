// 此文件定义接口类型，接口约束
export interface IGetListParams {
    pageNum: number
    size: number
    listType: string
    [propName: string]: any
}
export interface IManageListApi {
    getList: (params: IGetListParams) => Promise<any>
    menuListTest: () => Promise<any>
}