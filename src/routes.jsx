import { Route } from 'react-router-dom'
import App from './components/app'
import Landing from './components/landing/landing'
import About from './components/about/about'

export default (
  <div>
    <Route exact path="/" component={Landing} />
    <Route path="/about" component={About} />
  </div>
)
