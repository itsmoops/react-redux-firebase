import * as firebase from 'firebase'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import globals from './styles/globals'
import colors from './styles/colors'
import routes from './routes'
import storeConfig from './store/config'
import firebaseConfig from './firebase-config'
import './app.less'

// environment settings
let store
if (process.env.NODE_ENV === 'production') {
    store = storeConfig.prod()
    firebase.initializeApp(firebaseConfig.prod)
} else if (process.env.NODE_ENV === 'staging') {
    store = storeConfig.staging()
    firebase.initializeApp(firebaseConfig.staging)
} else {
    store = storeConfig.dev()
    firebase.initializeApp(firebaseConfig.dev)
}

// merge styles for theme
const theme = Object.assign({}, globals, colors)

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router>{routes}</Router>
        </ThemeProvider>
    </Provider>,
    document.getElementById('app')
)
