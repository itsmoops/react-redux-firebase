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
    return dispatch => {}
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                const userData = {
                    authenticated: true,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    displayName: user.displayName,
                    isAnonymous: user.isAnonymous,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL,
                    refreshToken: user.refreshToken
                }
                dispatch(checkForUserSuccess(userData))
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
    return async dispatch => {
		try {
			dispatch(loadingStateChange(true))
			const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
			const userData = {
				authenticated: true,
				email: user.email,
				emailVerified: user.emailVerified,
				displayName: user.displayName,
				isAnonymous: user.isAnonymous,
				phoneNumber: user.phoneNumber,
				photoURL: user.photoURL,
				refreshToken: user.refreshToken,
				message: undefined
			}
			dispatch(userSignUpSuccess(userData))
			dispatch(loadingStateChange(false))
		}
		catch (ex) {
			dispatch(userSignUpFailure(ex))
			dispatch(loadingStateChange(false))
		}
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
    return async dispatch => {
        try {
            dispatch(loadingStateChange(true))
            const user = await firebase.auth().signInWithEmailAndPassword(email, password)
            const userData = {
                authenticated: true,
                email: user.email,
                emailVerified: user.emailVerified,
                displayName: user.displayName,
                isAnonymous: user.isAnonymous,
                phoneNumber: user.phoneNumber,
                photoURL: user.photoURL,
                refreshToken: user.refreshToken,
                message: undefined
            }
            dispatch(userLoginSuccess(userData))
            dispatch(loadingStateChange(false))

        }
        catch (ex) {
            dispatch(userLoginFailure(ex))
            dispatch(loadingStateChange(false))
        }
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
    return async dispatch => {
        try {
            await firebase.auth().signOut()
            const userData = {
                authenticated: false
            }
            dispatch(userLogoutSuccess(userData))
        }
        catch (ex) {
            dispatch(userLogoutFailure(ex))
        }
    }
}

export function clearUserErrorMessage() {
    const reset = { message: undefined, code: undefined }
    return {
        type: types.CLEAR_USER_ERROR_MESSAGE,
        reset
    }
}
