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

import { call, put, select } from 'redux-saga/effects'
import ShopActions from '../Redux/ShopRedux'
import { UserSelectors } from '../Redux/UserRedux'

export function * getShop (api, action) {
  const { id } = action
  
  // make the call to the api
  const response = yield call(api.getShopOfUser, id)

  // success?
  if (response.ok && response.data.error === 0) {
    yield put(ShopActions.shopSuccess(response.data.data))
  } else {
    yield put(ShopActions.shopFailure())
  }
}
