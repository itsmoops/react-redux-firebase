import { Route } from 'react-router-dom'
import NavBar from './components/nav/nav-bar'
import HomePage from './components/home/home-page'
import About from './components/about/about'
import Help from './components/help/help'
import SignUp from './components/user/sign-up'
import Login from './components/user/login'
import Account from './components/user/account'
import Profile from './components/user/profile'
import NotFound from './components/not-found/not-found'

export default (
    <div>
        <Route component={NavBar} />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/help" component={Help} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/account" component={Account} />
        <Route path="/profile" component={Profile} />
    </div>
)
