import {Route} from 'react-router-dom'
import App from './components/app'
import NavBar from './components/shared/nav-bar'
import Landing from './components/landing/landing'
import About from './components/about/about'

export default(
    <div>
        <NavBar/>
        <Route exact path="/" component={Landing}/>
        <Route path="/about" component={About}/>
    </div>
)
