import { createStore, compose, applyMiddleware } from 'redux'
// middleware that errors on state mutations
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
// middleware that allows for async redux
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

// our exported functions which returns the store
// will be called at our app's root and provided to the redux Provider
const storeConfig = {
    dev(initialState) {
        // redux function that actually creates the store
        return createStore(
            rootReducer,
            initialState,
            compose(
                applyMiddleware(thunk, reduxImmutableStateInvariant()),
        		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
        )
    },

    prod(initialState) {
        return createStore(
            rootReducer,
            initialState,
            compose(
                applyMiddleware(thunk, reduxImmutableStateInvariant()),
            )
        )
    }
}

export default storeConfig
