//获取用户信息
import axiosReq from '@/utils/axios-req'
export const userInfoReq = (): Promise<any> => {
  return new Promise((resolve) => {
    const reqConfig = {
      url: '/api/v1/sys/userInfo',
      params: { plateFormId: 2 },
      method: 'get'
    }
    axiosReq(reqConfig).then(({ data }) => {
      resolve(data)
    })
  })
}

// 获取c用户信列表
export const userListReq = (param: PaginationReq): Promise<any> => {
  return new Promise((resolve) => {
    const reqConfig = {
      url: '/api/v1/sys/sysUser',
      data: param,
      method: 'get'
    }
    axiosReq(reqConfig).then(({ data }) => {
      resolve(data)
    })
  })
}

//登录
export const loginReq = (subForm) => {
  return axiosReq({
    url: '/api/v1/admin/login',
    data: subForm,
    method: 'post'
  })
}

//退出登录
export const loginOutReq = () => {
  return axiosReq({
    url: '/basis-func/user/loginValid',
    method: 'post'
  })
}
