import * as types from './action-types'

export function userSignUpSuccess(user) {
    return {
        type: types.USER_SIGN_UP_SUCCESS,
        user
    }
}

export function userSignUpError(error) {
    return {
        type: types.USER_SIGN_UP_ERROR,
        error
    }
}

export function userSignUp(user) {
    return dispatch => {
        firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(data => {
                dispatch(userSignUpSuccess(data))
            })
            .catch(error => {
                console.error(error.message)
                dispatch(userSignUpError(error))
            })
    }
}

export function userLoginSuccess(user) {
    return {
        type: types.USER_LOGIN_SUCCESS,
        user
    }
}

export function userLoginError(error) {
    return {
        type: types.USER_LOGIN_ERROR,
        error
    }
}

export function userLogin(user) {
    return dispatch => {
        firebase.auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(data => {
                dispatch(userSignUpSuccess(data))
            })
            .catch(error => {
                console.error(error.message)
                dispatch(userSignUpError(error))
            })
    }
}
