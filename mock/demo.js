// 仅做示例: 通过GET请求返回一个名字数组
export default [
  {
    url: '/fapp/getUsers',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: ['tom', 'jerry'],
      }
    },
  },
  {
    url: '/fapp/getList',
    method: 'get',
    // params: { id: "", name: "" },
    response: () => {
      return {
        code: 200,
        message: 'okwwwwwwww',
        data: ['ssss', 'aaaa'],
      }
    },
  },
]
