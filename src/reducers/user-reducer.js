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
            return { ...state, data: { ...state.data, ...action.user } }
        case types.CHECK_FOR_USER_FAILURE:
            return { ...state, data: { ...state.data, ...action.user } }
        case types.USER_SIGN_UP_SUCCESS:
            return { ...state, data: { ...state.data, ...action.user } }
        case types.USER_SIGN_UP_FAILURE:
            return { ...state, error: { ...state.error, ...action.error } }
        case types.USER_LOGIN_SUCCESS:
            return { ...state, data: { ...state.data, ...action.user } }
        case types.USER_LOGIN_FAILURE:
            return { ...state, error: { ...state.error, ...action.error } }
        case types.USER_LOGOUT_SUCCESS:
            return { ...state, data: action.user }
        case types.USER_LOGOUT_FAILURE:
            return { ...state, error: { ...state.error, ...action.error } }
        case types.SEND_EMAIL_VERIFICATION_SUCCESS:
            return { ...state, data: { ...state.data, ...action.success } }
        case types.SEND_EMAIL_VERIFICATION_FAILURE:
            return { ...state, error: { ...state.error, ...action.error } }
        case types.SEND_PASSWORD_RESET_SUCCESS:
            return { ...state, data: { ...state.data, ...action.success } }
        case types.SEND_PASSWORD_RESET_FAILURE:
            return { ...state, error: { ...state.error, ...action.error } }
        case types.USER_UPDATE_PASSWORD_SUCCESS:
            return { ...state, data: { ...state.data, ...action.success } }
        case types.USER_UPDATE_PASSWORD_FAILURE:
            return { ...state, error: { ...state.error, ...action.error } }
        case types.SAVE_USER_PROFILE_PICTURE_SUCCESS:
            return { ...state, data: { ...state.data, ...action.success } }
        case types.SAVE_USER_PROFILE_PICTURE_FAILURE:
            return { ...state, error: { ...state.error, ...action.error } }
        case types.SANITIZE_USER_STATE:
            return { ...state, data: { ...state.data, ...action.reset } }
        case types.SANITIZE_USER_ERROR_STATE:
            return { ...state, error: action.reset }
        default:
            return state
    }
}
