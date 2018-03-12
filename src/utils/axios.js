import axios from 'axios';
import { message } from 'antd';
import { default as api } from '../configs/api';

// axios.defaults.baseURL = '';  API 域。默认值：当前域
axios.defaults.withCredentials = true;  // 允许跨域且携带 Cookie（或自定义头）。默认值：false
axios.defaults.timeout = 30000; // 设置请求超时时间（ms）不超过半分钟
axios.defaults.headers.common['Authorization'] = '';  // 携带的自定义头
axios.defaults.headers.common['accept'] = '';  // 携带的自定义头
axios.defaults.headers.post['Content-Type'] = 'application/json';  // 设置请求提内容类型，其他可选值：application/x-www-form-urlencoded

function foo(config) {
  return new Promise(function(resolve, reject) {
    return resolve(config);
  })
}

axios.interceptors.request.use(config => {
  // console.log('【request】', config);
  return config;
}, error => {
  // console.log('【request error】', error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  // console.log('【response】', response);
  // 2xx 进入
  return response.data;
}, error => {
   console.log('【response error】', error.response);

  ///////////////////////
  // 异常-全局处理
  ///////////////////////

  // console.log('【error.response', error.response);
  // console.log('【error.request', error.request);
  // console.log('【error.message', error.message);
  // console.log('【error.config', error.config);

  if (error.response) {
    // 请求被执行，服务器以状态码进行响应

    switch (error.response.status) {
      case 400:
        // 400（Bad Request）：请求参数格式错误；提示错误消息
        //return message.error('请求参数（data）格式错误（' + error.config.method + error.config.url + '）');
        return error.response ? error.response.data : error.response;
        break;
      case 401:
        return auth();
        //return error.response ? error.response.data : error;
        break;
      case 504:
        // 401（Unauthorized）：未身份验证或身份失效；跳转到登录页
        // 504（Gateway Timeout）：响应超时，跳转到登录页
        // TODO：在此处移除本地登录信息
        return window.location.href = '/login';
        break;
      case 403:
        // 403（Forbidden）：已授权或不需要授权，但禁止访问；跳转到 403 页
        return window.location.href = '/403';
        break;
      case 404:
        // 404（Not Found）：请求 URL 格式错误；提示错误消息
        return message.error('请求 URL 格式错误（' + error.config.url + '）');
        break;
      case 405:
        // 405（Method Not Allowed）：请求 Method 格式错误；提示错误消息
        return message.error('请求 Method 格式错误（' + error.config.url + '）');
        break;
      case 406:
        // 406（Not Acceptable）：请求 Content-Type 格式错误
        return message.error('请求 Content-Type 格式错误（' + error.config.url + '）');
        break;
      case 408:
        // 408（Request Timeout）：请求超时
        return message.warning('请求超时（' + error.config.url + '）');
        break;
    }

    let err = /^5\d{2}$/g;
    if (err.test(error.response.status)) {
      console.log('接口内部错误', error.response)
      //接口报500错误不能跳转
      return error.response ? error.response.data : error.response;
      // 5xx：接口内部错误；跳转到 500 页
      //return window.location.href = '/500';
    }

  } else if (error.request) {
    // 请求被提出，但是没有收到任何回应
  } else {
    // 在设置请求时触发错误，发生了一些问题

    // 1）请求超过指定的时间：终止请求
    if (error.message === 'timeout of ' + (error.config || {}).timeout + 'ms exceeded') {
      return message.warning('请求超时，请刷新页面重新请求！');
    }
    // 2 ）网络错误
    if (error.message === 'Network Error') {
      return window.location.href = '/error';
    }
  }
  return Promise.reject(error);
});

function auth () {
  const count = parseInt(localStorage.getItem('authCount') || 0);
  const lastAuthTime = parseInt(localStorage.getItem('lastAuthTime') || 0);
  const current = Math.round(new Date().getTime() / 1000);
  // 1分钟3次重试防止后端出现授权失败, 前端死循环
  if (count > 2 && current - lastAuthTime < 60 * 1000) {
    localStorage.setItem('authCount', 0);
    return {};
  }
  localStorage.setItem('authCount', count + 1);
  localStorage.setItem('lastAuthTime', current);


  // code 用来授权, 重定向地址需要移除code参数以免影响后期授权
  const redirectUrl = window.location.href.replace(/code=/g, 'code2=');
  localStorage.setItem('redirectUrl', redirectUrl);
  return window.location.href = `${configs.host.passport.auth + api.auth}?client_id=${configs.clientId}&redirect_uri=${redirectUrl}&response_type=code&scope=get_user_info&state=xyz`;
}

export default axios;

export { auth };
