import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/user-actions'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class LogoutModal extends React.Component {
    handleLogout = e => {
		this.props.actions.userLogout()
		this.handleItemClick()
	}
    render() {
        return (
            <Modal open={this.props.open} basic size="small">
                <Header icon="warning" content="Logout" />
                <Modal.Content>
                    <p>Are you sure you want to log out?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color="red" inverted>
                        <Icon name="remove" /> No
                    </Button>
                    <Button color="green" inverted>
                        <Icon name="checkmark" /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

function mapStateToProps(state, ownProps) {
	return { user: state.user }
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutModal)
