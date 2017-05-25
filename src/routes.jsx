import {Route} from 'react-router-dom'
import NavBar from './components/shared/nav-bar'
import HomePage from './components/home/home-page'
import About from './components/about/about'

export default(
    <div>
        <NavBar/>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={About}/>
    </div>
)
