import { createStore, applyMiddleware } from 'redux'
// middleware that errors on state mutations
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
// middleware that allows for async redux
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

// our exported function which returns the store
// will be called at our app's root and provided to the redux Provider
export default function configureStore(initialState) {
    // redux function that actually creates the store
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant()),
    )
}
