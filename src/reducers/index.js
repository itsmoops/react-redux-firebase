import {
    combineReducers
} from 'redux';
import users from './user-reducer';

// naming here matters, this is how we will reference data in components
const rootReducer = combineReducers({
    users // shorthand property names
})

export default rootReducer
