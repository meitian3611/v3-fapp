// 此文件定义接口类型，接口约束
export interface ICommonParams {
    // [propName: string]: any
}
export interface ICommonApi {
    getPermList: (params: ICommonParams) => Promise<any>
}