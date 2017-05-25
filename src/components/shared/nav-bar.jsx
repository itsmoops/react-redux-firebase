import {Segment} from 'semantic-ui-react'
import './nav-bar.less'

class NavBar extends React.Component {
    render() {
        return (
            <Segment inverted attached="top" textAlign="center" className="nav-bar">React | Redux | Webpack</Segment>
        )
    }
}

export default NavBar
