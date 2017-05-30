import {
    createStore,
    applyMiddleware
} from 'redux'
import rootReducer from '../reducers'
import {
    helloSaga
} from '../sagas/sagas'
// middleware that errors on state mutations
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
// middleware that allows for async redux
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()

// our exported function which returns the store
// will be called at our app's root and provided to the redux Provider
export default function configureStore(initialState) {
    // redux function that actually creates the store
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware, reduxImmutableStateInvariant())
    )

    // run sagas after applying the saga middleware
    sagaMiddleware.run(helloSaga)

    return store
}
