import 'semantic-ui-css/semantic.min.css'
import * as firebase from 'firebase'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import config from './firebase-config'
import configureStore from './store/config'
import routes from './routes'
import './app.less'

firebase.initializeApp(config)

// can pass our initialState here - useful for server rendering
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
      <Router>{routes}</Router>
    </Provider>,
    document.getElementById('app')
)
