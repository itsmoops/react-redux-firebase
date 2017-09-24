import * as types from './action-types'
import { loadingStateChange } from './global-actions'

function checkForUserResult(user) {
    return {
        type: types.CHECK_FOR_USER,
        user
    }
}

export function checkForUser() {
    return dispatch =>
        firebase.auth().onAuthStateChanged((data) => {
            if (data) {
                const user = {
                    authenticated: true,
                    email: data.email,
                    emailVerified: data.emailVerified,
                    displayName: data.displayName,
                    isAnonymous: data.isAnonymous,
                    phoneNumber: data.phoneNumber,
                    photoURL: data.photoURL,
                    refreshToken: data.refreshToken
                }
                dispatch(checkForUserResult(user))
                dispatch(loadingStateChange(false))
            } else {
                const user = {
                    authenticated: false
                }
                dispatch(checkForUserResult(user))
                dispatch(loadingStateChange(false))
            }
        })
}

function userSignUpSuccess(user) {
    return {
        type: types.USER_SIGN_UP_SUCCESS,
        user
    }
}

function userSignUpError(error) {
    return {
        type: types.USER_SIGN_UP_ERROR,
        error
    }
}

export function userSignUp(user) {
    return (dispatch) => {
        dispatch(loadingStateChange(true))
        return firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then((data) => {
                const userData = {
                    authenticated: true,
                    email: data.email,
                    emailVerified: data.emailVerified,
                    displayName: data.displayName,
                    isAnonymous: data.isAnonymous,
                    phoneNumber: data.phoneNumber,
                    photoURL: data.photoURL,
                    refreshToken: data.refreshToken,
                    message: undefined
                }
                dispatch(userSignUpSuccess(userData))
                dispatch(loadingStateChange(false))
            })
            .catch((e) => {
                dispatch(userSignUpError(e))
                dispatch(loadingStateChange(false))
            })
    }
}

function userLoginSuccess(user) {
    return {
        type: types.USER_LOGIN_SUCCESS,
        user
    }
}

function userLoginError(error) {
    return {
        type: types.USER_LOGIN_ERROR,
        error
    }
}

export function userLogin(user) {
    return (dispatch) => {
        dispatch(loadingStateChange(true))
        return firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then((data) => {
                const userData = {
                    authenticated: true,
                    email: data.email,
                    emailVerified: data.emailVerified,
                    displayName: data.displayName,
                    isAnonymous: data.isAnonymous,
                    phoneNumber: data.phoneNumber,
                    photoURL: data.photoURL,
                    refreshToken: data.refreshToken,
                    message: undefined
                }
                dispatch(userLoginSuccess(userData))
                dispatch(loadingStateChange(false))
            })
            .catch((e) => {
                dispatch(userLoginError(e))
                dispatch(loadingStateChange(false))
            })
    }
}

function userLogoutSuccess(user) {
    return {
        type: types.USER_LOGOUT_SUCCESS,
        user
    }
}

function userLogoutError(error) {
    return {
        type: types.USER_LOGOUT_ERROR,
        error
    }
}

export function userLogout() {
    return dispatch =>
        firebase
            .auth()
            .signOut()
            .then(() => {
                const userData = {
                    authenticated: false
                }
                dispatch(userLogoutSuccess(userData))
            })
            .catch((e) => {
                dispatch(userLogoutError(e))
            })
}
