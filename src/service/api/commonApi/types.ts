// 此文件定义接口类型，接口约束
export interface IAccountParams {
    accountName: string
}
export interface ICommonApi {
    getPermList: () => Promise<any>
    getSelectAccount: (params: IAccountParams) => Promise<any>
}