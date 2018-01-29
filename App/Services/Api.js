// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// api list
const ApiUrl = {
  defaultApi: 'https://mypop.vn',
  authApi: 'https://auth-api.mypop.vn',
}

const serialize = (params) => {
  let result = ''
  for (let key in params) {
    result += `${key}=${params[key]}&`
  }
  return `?${result}`
}

const transformRequest = (data, headers) => {
  if (global.SID) {
    headers['SID'] = global.SID
  }
  return data;
}

const logRequest = response => {
  const logMessage = `
  Call api to: ${response.config.url} 
  Headers: ${JSON.stringify(response.config.headers)}
  Response: ${JSON.stringify(response.data)}`
  console.log('====================================');
  console.log(logMessage);
  console.log('====================================');
}

// our "constructor"
const create = () => {
  const apis = {};

  const headers = {
    'Cache-Control': 'no-cache',
  }

  // if (global.SID) {
  //   headers['SID'] = global.SID
  // }
  for (let key in ApiUrl) {
    apis[key] = apisauce.create({
      baseURL: ApiUrl[key],
      headers,
      timeout: 10000,
      transformRequest,
    })
    apis[key].addMonitor(logRequest)
  }
  
  // console.log('====================================');
  // console.log(global.SID);
  // console.log('====================================');

  const getRoot = () => api.get('')
  const getRate = () => api.get('rate_limit')
  const getUser = (username) => api.get('search/users', {q: username})
  const login = (payload) => apis['authApi']
    .post('auth/login' + serialize({
      ...payload,
      authType: 1,
      countryCode: 84,
    }))
  
  return {
    getRoot,
    getRate,
    getUser,
    login,
  }
}

// let's return back our create method as the default.
export default {
  create
}
