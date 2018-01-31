import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  shopRequest: ['id'],
  shopSuccess: ['payload'],
  shopFailure: null,
  shopReset: null,
})

export const ShopTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: [],
  shopSeleted: -1,
  fetching: null,
  error: null
})

/* ------------- Selectors ------------- */

export const ShopSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, data: payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, data: null })

export const reset = state =>
  state.merge({ fetching: false, error: true, data: [] })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHOP_SUCCESS]: success,
  [Types.SHOP_FAILURE]: failure,
  [Types.SHOP_RESET]: reset,
})
