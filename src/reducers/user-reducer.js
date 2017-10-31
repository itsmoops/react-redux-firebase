import * as types from '../actions/action-types'

const defaultState = {
    data: {
        authenticated: false
    },
    error: {}
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case types.CHECK_FOR_USER_SUCCESS:
            return Object.assign({}, state, { data: action.user })
        case types.CHECK_FOR_USER_FAILURE:
            return Object.assign({}, state, { data: action.user })
        case types.USER_SIGN_UP_SUCCESS:
            return Object.assign({}, state, { data: action.user })
        case types.USER_SIGN_UP_FAILURE:
            return Object.assign({}, state, { error: action.error })
        case types.USER_LOGIN_SUCCESS:
            return Object.assign({}, state, { data: action.user })
        case types.USER_LOGIN_FAILURE:
            return Object.assign({}, state, { error: action.error })
        case types.USER_LOGOUT_SUCCESS:
            return Object.assign({}, state, { data: action.user })
        case types.USER_LOGOUT_FAILURE:
            return Object.assign({}, state, { error: action.error })
        case types.CLEAR_USER_ERROR_MESSAGE:
            return Object.assign({}, state, { error: action.reset })
        default:
            return state
    }
}
