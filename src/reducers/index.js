import {
  combineReducers,
} from 'redux';
import user from './user-reducer';

// naming here matters, this is how we will reference data in components
const rootReducer = combineReducers({
  user,
});

export default rootReducer;
