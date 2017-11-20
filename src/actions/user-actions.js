import * as types from './action-types'
import { loadingStateChange } from './global-actions'
import { sanitizeUserErrorMessage } from '../utilities/utilities'

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
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const userData = {
                    authenticated: true,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    displayName: user.displayName,
                    isAnonymous: user.isAnonymous,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL,
                    refreshToken: user.refreshToken,
                    uid: user.uid
                }
                dispatch(checkForUserSuccess(userData))
                dispatch(loadingStateChange(false))
            } else {
                user = {
                    authenticated: false
                }
                dispatch(checkForUserFailed(user))
                dispatch(loadingStateChange(false))
            }
        })
    }
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
    return async (dispatch) => {
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
        } catch (err) {
            err.message = err.code && sanitizeUserErrorMessage(err)
            dispatch(userSignUpFailure(err))
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
    return async (dispatch) => {
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
                refreshToken: user.refreshToken
            }
            dispatch(userLoginSuccess(userData))
            dispatch(loadingStateChange(false))
        } catch (err) {
            err.message = err.code && sanitizeUserErrorMessage(err)
            dispatch(userLoginFailure(err))
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
    return async (dispatch) => {
        try {
            await firebase.auth().signOut()
            const userData = {
                authenticated: false
            }
            dispatch(userLogoutSuccess(userData))
        } catch (err) {
            err.message = err.code && sanitizeUserErrorMessage(err)
            dispatch(userLogoutFailure(err))
        }
    }
}

function sendEmailVerificationSuccess(success) {
    return {
        type: types.SEND_EMAIL_VERIFICATION_SUCCESS,
        success
    }
}

function sendEmailVerificationFailure(error) {
    return {
        type: types.SEND_EMAIL_VERIFICATION_FAILURE,
        error
    }
}

export function sendEmailVerification() {
    return async (dispatch) => {
        try {
            await firebase.auth().currentUser.sendEmailVerification()
            const success = {
                emailSent: true
            }
            dispatch(sendEmailVerificationSuccess(success))
        } catch (err) {
            err.message = err.code && sanitizeUserErrorMessage(err)
            dispatch(sendEmailVerificationFailure(err))
        }
    }
}

function sendPasswordResetEmailSuccess(success) {
    return {
        type: types.SEND_PASSWORD_RESET_SUCCESS,
        success
    }
}

function sendPasswordResetEmailFailure(error) {
    return {
        type: types.SEND_PASSWORD_RESET_FAILURE,
        error
    }
}

export function sendPasswordResetEmail(email) {
    return async (dispatch) => {
        try {
            dispatch(loadingStateChange(true))
            await firebase.auth().sendPasswordResetEmail(email)
            const success = {
                emailSent: true
            }
            dispatch(sendPasswordResetEmailSuccess(success))
            dispatch(loadingStateChange(false))
        } catch (err) {
            err.message = err.code && sanitizeUserErrorMessage(err)
            dispatch(sendPasswordResetEmailFailure(err))
            dispatch(loadingStateChange(false))
        }
    }
}

function userUpdatePasswordSuccess(success) {
    return {
        type: types.USER_UPDATE_PASSWORD_SUCCESS,
        success
    }
}

function userUpdatePasswordFailure(error) {
    return {
        type: types.USER_UPDATE_PASSWORD_FAILURE,
        error
    }
}

export function userUpdatePassword(currentPassword, newPassword) {
    return async (dispatch) => {
        try {
            dispatch(loadingStateChange(true))
            const user = await firebase.auth().currentUser
            const credential = firebase.auth.EmailAuthProvider.credential(
                user.email,
                currentPassword
            )
            await user.reauthenticateWithCredential(credential)
            await user.updatePassword(newPassword)
            const success = {
                passwordUpdated: true
            }
            dispatch(userUpdatePasswordSuccess(success))
            dispatch(loadingStateChange(false))
        } catch (err) {
            err.message = err.code && sanitizeUserErrorMessage(err)
            dispatch(userUpdatePasswordFailure(err))
            dispatch(loadingStateChange(false))
        }
    }
}

export function saveUserProfilePictureSuccess(success) {
    return {
        type: types.UPLOAD_PROFILE_PICTURE_SUCCESS,
        success
    }
}

export function saveUserProfilePictureFailure(error) {
    return {
        type: types.UPLOAD_PROFILE_PICTURE_FAILURE,
        error
    }
}

export function saveUserProfilePicture(photoURL) {
    return async (dispatch) => {
        try {
            dispatch(loadingStateChange(true))
            const user = firebase.auth().currentUser
            await user.updateProfile({
                photoURL
            })
            const success = {
                profilePhotoSaved: true
            }
            dispatch(saveUserProfilePictureSuccess(success))
            dispatch(loadingStateChange(false))
        } catch (err) {
            err.message = err.code && sanitizeUserErrorMessage(err)
            dispatch(saveUserProfilePictureFailure(err))
            dispatch(loadingStateChange(false))
        }
    }
}

export function sanitizeUserState() {
    const reset = {
        emailSent: undefined,
        passwordUpdated: undefined
    }
    return {
        type: types.SANITIZE_USER_STATE,
        reset
    }
}

export function sanitizeUserErrorState() {
    const reset = {
        message: undefined,
        code: undefined
    }
    return {
        type: types.SANITIZE_USER_ERROR_STATE,
        reset
    }
}
