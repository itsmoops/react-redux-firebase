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
                dispatch(userSignUpSuccess(data))
                dispatch(loadingStateChange(false))
            })
            .catch(e => {
                console.error(e.message)
                dispatch(userSignUpError(e))
                dispatch(loadingStateChange(false))
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
                dispatch(userSignUpSuccess(data))
                dispatch(loadingStateChange(false))
            })
            .catch(e => {
                console.error(e.message)
                dispatch(userSignUpError(e))
                dispatch(loadingStateChange(false))
            })

    }
}
