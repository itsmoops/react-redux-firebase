import {
    createStore,
    applyMiddleware
} from 'redux'
import rootReducer from '../reducers'
// middleware that errors on state mutations
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant())
    )
}
