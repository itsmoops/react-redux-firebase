import {Route} from 'react-router-dom'
import NavBar from './components/shared/nav-bar'
import HomePage from './components/home/home-page'
import About from './components/about/about'
import Help from './components/help/help'
import SignUp from './components/user/sign-up'
import Login from './components/user/login'

export default(
    <div>
        <Route component={NavBar}/>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={About}/>
        <Route path="/help" component={Help}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route path="/login" component={Login}/>
    </div>
)
