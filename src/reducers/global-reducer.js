import * as types from '../actions/action-types'

const defaultState = {
    isSmallDevice: false,
    loading: false
}

export default function globalReducer(state = defaultState, action) {
    switch (action.type) {
    case types.CHECK_DEVICE_SIZE:
        return Object.assign({}, state, { isSmallDevice: action.isSmallDevice })
    case types.LOADING_STATE_CHANGE:
        return Object.assign({}, state, { loading: action.loading })
    default:
        return state
    }
}
