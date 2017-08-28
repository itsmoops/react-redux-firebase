import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../../actions/user-actions'
import {Link} from 'react-router-dom'
import {Menu, Icon} from 'semantic-ui-react'
import CollapsibleNav from './collapsible-nav'
import {isMobile} from '../../utilities/utilities'
import MenuLarge from './menu-large'
import MenuSmall from './menu-small'

class NavBar extends React.Component {
    componentDidMount() {
        this.props.actions.checkForUser()
    }
    render() {
        const activeItem = this.props.location.pathname.replace('/', '')
        return (
            <CollapsibleNav>
                {isMobile()
                    ? <MenuSmall activeItem={activeItem}/>
                    : <MenuLarge activeItem={activeItem}/>}
            </CollapsibleNav>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {user: state.user}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
