//本地开发环境
var configs = {
  name: 'Steward.Web',
  version: '1.0.0-beta.0',
  productName: '福禄管家-系统总管',
  productVersion: 'X1',
  clientId:'10000003',
  accessToken:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE3OEJBNEJGMDZGQzkzMDY1QUEyNTgyRjU1QzcyMkE2IiwiY2xpZW50X2lkIjoiMTAwMDAwMDMiLCJuYW1lIjoiODAwMSIsIm5pY2tuYW1lIjoi56ym54aZIiwicGhvbmVfbnVtYmVyIjoiMTg2MjcxMTU2NTciLCJlbWFpbCI6Ijc3NTE0NTU0QHFxLmNvbSIsInJvbGUiOiJVc2VyIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDoxNTMxIiwiYXVkIjoiYXBpIiwiZXhwIjoxNTIxNzcyNDYxLCJuYmYiOjE1MTY1ODg0NjF9.cfYs3h1KmMdExHPNevec1s2CLOSEcAuN1aIXiTiouhc',
  // host: {
  //   passport:{
  //     'getUserInfo': 'http://10.0.0.135:8087',//获取通行证
  //     'authCode': 'http://10.0.1.30:10080',//获取通行证
  //     'auth': 'http://10.0.0.135:8090'// 通行证登录页
  //   },
  //   common:'http://10.0.1.30:10080',//左侧导航和头部导航 福禄管家通用接口
  //   steward:'http://10.0.1.30:10080',//系统管家 接口
  //   webapi:'http://10.0.1.30:10081' //新接口的地址
  // }
  host: {
    passport:{
      'getUserInfo': 'http://10.0.0.135:8087',//获取通行证
      'authCode': 'http://10.0.0.60:10080',//获取通行证
      'auth': 'http://10.0.0.135:8090'// 通行证登录页
    },
    common:'http://10.0.0.60:10080',//左侧导航和头部导航 福禄管家通用接口
    steward:'http://10.0.0.60:10080',//系统管家 接口
    webapi:'http://10.0.0.60:10081' //新接口的地址
  }
};
