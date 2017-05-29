import {BrowserRouter as Router} from 'react-router-dom'
import routes from './routes'
import configureStore from './store/config'
import {Provider} from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'

import 'semantic-ui-css/semantic.min.css'
import './app.less'

// can pass our initialState here - useful for server rendering
const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
    <Router>{routes}</Router>
</Provider>, document.getElementById('app'))
