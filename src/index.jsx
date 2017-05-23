import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'

// import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('app')
)
