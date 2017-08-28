import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../../actions/user-actions'
import {isSmallDevice} from '../../utilities/utilities'
import MenuLarge from './menu-large'
import MenuSmall from './menu-small'

class NavBar extends React.Component {
    state = {
        smallMenu: isSmallDevice()
    }
    componentDidMount() {
        this.props.actions.checkForUser()
        window.addEventListener('resize', this.updateWidth)
    }
    updateWidth = () => {
        this.setState({smallMenu: isSmallDevice()})
    }
    render() {
        const activeItem = this.props.location.pathname.replace('/', '')
        return (
            <div>
                {this.state.smallMenu
                    ? <MenuSmall activeItem={activeItem}/>
                    : <MenuLarge activeItem={activeItem}/>}
            </div>
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
