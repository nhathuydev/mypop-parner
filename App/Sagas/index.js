import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { UserTypes } from '../Redux/UserRedux'
import { ShopTypes } from '../Redux/ShopRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { loginUser, logoutUser, getProfile } from './UserSagas'
import { getShop } from './ShopSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest('persist/REHYDRATE', startup),
    
    takeLatest(UserTypes.USER_LOGIN, loginUser, api),
    takeLatest(UserTypes.USER_LOGOUT, logoutUser, api),
    takeLatest(UserTypes.USER_REQUEST, getProfile, api),

    takeLatest(ShopTypes.SHOP_REQUEST, getShop, api),
  ])
}
