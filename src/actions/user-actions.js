import * as types from './action-types'
import { loadingStateChange } from './global-actions'

function checkForUserSuccess(user) {
    return {
        type: types.CHECK_FOR_USER_SUCCESS,
        user
    }
}

function checkForUserFailed(user) {
    return {
        type: types.CHECK_FOR_USER_FAILURE,
        user
    }
}

export function checkForUser() {
    return dispatch =>
        firebase.auth().onAuthStateChanged(data => {
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
                dispatch(checkForUserSuccess(user))
                dispatch(loadingStateChange(false))
            } else {
                const user = {
                    authenticated: false
                }
                dispatch(checkForUserFailed(user))
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

function userSignUpFailure(error) {
    return {
        type: types.USER_SIGN_UP_FAILURE,
        error
    }
}

export function userSignUp(email, password) {
    return dispatch => {
        dispatch(loadingStateChange(true))
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(data => {
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
            .catch(ex => {
                dispatch(userSignUpFailure(ex))
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

function userLoginFailure(error) {
    return {
        type: types.USER_LOGIN_FAILURE,
        error
    }
}

export function userLogin(email, password) {
    return (dispatch) => {
        dispatch(loadingStateChange(true))
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(data => {
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
            .catch(ex => {
                dispatch(userLoginFailure(ex))
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

function userLogoutFailure(error) {
    return {
        type: types.USER_LOGOUT_FAILURE,
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
            .catch(ex => {
                dispatch(userLogoutFailure(ex))
            })
}

export function clearUserErrorMessage() {
    const reset = { message: undefined, code: undefined }
    return {
        type: types.CLEAR_USER_ERROR_MESSAGE,
        reset
    }
}
