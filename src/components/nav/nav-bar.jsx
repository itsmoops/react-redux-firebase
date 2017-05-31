import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../../actions/user-actions'
import {Link} from "react-router-dom"
import {Button, Container, Menu, Icon} from "semantic-ui-react"
import CollapsibleNav from './collapsible-nav'

class NavBar extends React.Component {
    render() {
        const user = firebase.auth().currentUser

        firebase.auth().onAuthStateChanged(user => {
            console.log(user)
            if (user) {
                // User is signed in.
                // var displayName = user.displayName;
                // var email = user.email;
                // var emailVerified = user.emailVerified;
                // var photoURL = user.photoURL;
                // var isAnonymous = user.isAnonymous;
                // var uid = user.uid;
                // var providerData = user.providerData;
                // ...
            } else {
                // User is signed out.
                // ...
            }
        })

        const activeItem = this.props.location.pathname.replace("/", "")

        return (
            <CollapsibleNav>
                <Menu pointing secondary stackable className="nav-bar">
                    <Menu.Item name="home" active={activeItem === ""} as={Link} to="/" onClick={this.handleItemClick}>
                        Home
                    </Menu.Item>
                    <Menu.Item name="about" active={activeItem === "about"} as={Link} to="/about" onClick={this.handleItemClick}>
                        About
                    </Menu.Item>
                    <Menu.Menu position="right"/>
                    <Menu.Item name="help" active={activeItem === "help"} as={Link} to="/help" onClick={this.handleItemClick}>
                        Help
                    </Menu.Item>
                    <Menu.Item name="signup" active={activeItem === "sign-up"} as={Link} to="/sign-up" onClick={this.handleItemClick}>
                        Sign Up
                    </Menu.Item>
                    <Menu.Item name="login" active={activeItem === "login"} as={Link} to="/login" onClick={this.handleItemClick}>
                        Log In
                    </Menu.Item>
                </Menu>
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
