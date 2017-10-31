import * as types from '../actions/action-types'

const defaultState = {
    loading: false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case types.LOADING_STATE_CHANGE:
            return Object.assign({}, state, { loading: action.loading })
        case types.CHECK_FOR_USER_SUCCESS:
            return Object.assign({}, state, action.user)
        case types.CHECK_FOR_USER_FAILURE:
            return Object.assign({}, state, action.user)
        case types.USER_SIGN_UP_SUCCESS:
            return Object.assign({}, state, action.user)
        case types.USER_SIGN_UP_FAILURE:
            return Object.assign({}, state, action.error)
        case types.USER_LOGIN_SUCCESS:
            return Object.assign({}, state, action.user)
        case types.USER_LOGIN_FAILURE:
            return Object.assign({}, state, action.error)
        case types.USER_LOGOUT_SUCCESS:
            return Object.assign({}, state, action.user)
        case types.USER_LOGOUT_FAILURE:
            return Object.assign({}, state, action.error)
        case types.CLEAR_USER_ERROR_MESSAGE:
            return Object.assign({}, state, { message: undefined, code: undefined })
        default:
            return state
    }
}
