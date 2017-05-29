import * as types from '../actions/action-types'

const defaultState = {}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case types.USER_SIGN_UP:
            return Object.assign({}, state, action.user)
        default:
            return state
    }
}
