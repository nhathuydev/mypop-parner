/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put, take } from 'redux-saga/effects'
import UserActions from '../Redux/UserRedux'
import ShopActions from '../Redux/ShopRedux'

export function* getProfile(api, action) {
  const { id } = action
  // // get current data from Store
  // // const currentData = yield select(UserSelectors.getData)
  // // make the call to the api
  const response = yield call(api.getProfile, id)

  // // success?
  if (response.ok &&  response.data.error === 0) {
    yield put(UserActions.userSuccess(response.data.data))
  } else {
    // yield put(UserActions.userFailure())
  }
}

export function* loginUser(api, action) {
  const {login, secret} = action

  const payload = {login, secret}
  const response = yield call(api.login, payload)
  
  if (response.ok && response.data.error === 0) {
    const userInfo = response.data.data
    const userId = userInfo.uid
    userInfo.mqttInfo = response.data.extraData.mqttInfo

    global.SID = userInfo.sessionKey
    yield put(UserActions.userSuccess(userInfo))
    yield put(UserActions.userRequest(userId))
    yield put(ShopActions.shopRequest(userId))
  } else {

  }
}

export function* logoutUser(api, action) {
  yield put(UserActions.userReset())
  yield put(ShopActions.shopReset())
  const response = yield call(api.logout)

  // if (response.ok && response.data.error === 0) {
  //   yield put(UserActions.userSuccess(null))
  // } else {

  // }
}