import request from '../request'

// 用户临时票据获取
export const reqTicket = () => {
  return request({
    name: 'ty-service',
    data: {
      action: 'system.userTicket',
      params: {}
    }
  })
}

export const getClientId = () => {
  return request({
    name: 'ty-service',
    data: {
      action: 'getClientId',
      params: {}
    }
  })
}

// 根据uid获取用户信息
export const getUserInfo = (uid) => {
  return request({
    name: 'ty-service',
    data: {
      action: 'user.infos',
      params: {
        uid
      }
    }
  })
}

export const gotoApNetwork = async () => {
  const { data: { clientId } } = (await getClientId()).result
  const { ticket } = await reqTicket()
  wx.navigateTo({
    url: `plugin://tuya-ap-plugin/step1?clientId=${clientId}&ticket=${ticket}`,
  })
}

export const gotoVirtualNetwork = async () => {
  const { data: { clientId } } = (await getClientId()).result
  const { ticket } = await reqTicket()
  wx.navigateTo({
    url: `plugin://tuya-ap-plugin/virtual?clientId=${clientId}&ticket=${ticket}`,
  })
}

