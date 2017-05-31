import * as types from '../actions/action-types'

const defaultState = {}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case types.USER_SIGN_UP_SUCCESS:
            return Object.assign({}, state, action.user)
        case types.USER_SIGN_UP_ERROR:
            return Object.assign({}, state, action.error)
        case types.USER_LOGIN_SUCCESS:
            return Object.assign({}, state, action.user)
        case types.USER_LOGIN_ERROR:
            return Object.assign({}, state, action.error)
        default:
            return state
    }
}
