import * as types from './action-types'

// action creaters
// literally returns an action

export function userSignUp(user) {
    return {
        type: types.USER_SIGN_UP,
        user
    }
}
