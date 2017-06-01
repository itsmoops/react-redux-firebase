import * as types from './action-types'

export function loadingStateChange(loading) {
    return {
        type: types.LOADING_STATE_CHANGE,
        loading: loading
    }
}

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
        dispatch(loadingStateChange(true))
        return firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(data => {
                let user = {
                	email: data.email,
                    emailVerified: data.emailVerified,
                    displayName: data.displayName,
                    isAnonymous: data.isAnonymous,
                    phoneNumber: data.phoneNumber,
                    photoURL: data.photoURL,
                    refreshToken: data.refreshToken
                }
                dispatch(userSignUpSuccess(user))
                dispatch(loadingStateChange(false))
            })
            .catch(e => {
                dispatch(userSignUpError(e))
                dispatch(loadingStateChange(false))
                console.error(e.message)
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
        dispatch(loadingStateChange(true))
        return firebase.auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(data => {
                let user = {
                	email: data.email,
                    emailVerified: data.emailVerified,
                    displayName: data.displayName,
                    isAnonymous: data.isAnonymous,
                    phoneNumber: data.phoneNumber,
                    photoURL: data.photoURL,
                    refreshToken: data.refreshToken
                }
                dispatch(userLoginSuccess(user))
                dispatch(loadingStateChange(false))
            })
            .catch(e => {
                dispatch(userLoginError(e))
                dispatch(loadingStateChange(false))
                console.error(e.message)
            })

    }
}
