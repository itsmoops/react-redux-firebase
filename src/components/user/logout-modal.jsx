import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/user-actions'

class LogoutModal extends React.Component {
	handleLogout = e => {
		this.props.actions.userLogout()
		this.handleItemClick()
	}
	render() {
		return <div />
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
