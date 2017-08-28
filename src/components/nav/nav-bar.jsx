import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../../actions/user-actions'
import CollapsibleNav from './collapsible-nav'
import {isMobile} from '../../utilities/utilities'
import MenuLarge from './menu-large'
import MenuSmall from './menu-small'

class NavBar extends React.Component {
    state = {
        mobileMenu: isMobile()
    }
    componentDidMount() {
        this.props.actions.checkForUser()
        window.addEventListener('resize', this.updateWidth)
    }
    updateWidth = () => {
        this.setState({
            mobileMenu: isMobile()
        })
    }
    render() {
        const activeItem = this.props.location.pathname.replace('/', '')
        return (
            <CollapsibleNav>
                {this.state.mobileMenu
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
