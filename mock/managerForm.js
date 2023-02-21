// 科目管理表单 mock api
export default [
  {
    url: '/fapp/account/manager/page',
    method: 'get',
    // params: { pageNum: '', size: '', listType: '' },
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: ['ssss', 'aaaa'],
      }
    },
  },
]
