import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  userRequest: ['id'],
  userSuccess: ['payload'],
  userReset: null,
  userFailure: null,
  userLogin: ['login', 'secret'],
  userLogout: null,
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  error: null
})

/* ------------- Selectors ------------- */

export const UserSelectors = {
  getData: state => state.user.data,
  getSID: state => state.data,
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data })

export const reset = (state) => state.merge({ fetching: false, data: null, error: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  const data = {...state.data, ...payload}
  return state.merge({ fetching: false, error: null, data })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, data: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_RESET]: reset,
  [Types.USER_SUCCESS]: success,
  [Types.USER_FAILURE]: failure,
})
