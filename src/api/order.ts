// 获取订单列表信息
import axiosReq from '@/utils/axios-req'

// 获取订单列表
export const apiOrderList = (param: PaginationReq): Promise<any> => {
  return new Promise((resolve) => {
    const reqConfig = {
      url: '/api/v1/sys/orders',
      data: param,
      method: 'get'
    }
    axiosReq(reqConfig).then(({ data }) => {
      resolve(data)
    })
  })
}
