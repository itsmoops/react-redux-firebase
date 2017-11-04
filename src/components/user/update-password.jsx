import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/user-actions'
import FlexContainer from '../shared/flex-container'
import Input from '../shared/input'
import Button from '../shared/button'
import Message from '../shared/message'

class UpdatePassword extends React.Component {
	state = {
		currentPassword: '',
		newPassword: ''
	}
	componentDidMount() {
		document.title = 'Update Password'
	}
	componentWillUnmount() {
		this.props.actions.sanitizeUserState()
		this.props.actions.sanitizeUserErrorState()
	}
	handleInputChange = e => {
		const name = e.target.name
		const value = e.target.value
		this.setState({ [name]: value })
	}
	onHandleSubmit = async e => {
		e.preventDefault()
		this.props.actions.userUpdatePassword(this.state.currentPassword, this.state.newPassword)
	}
	render() {
		const { message } = this.props.user.error
		const { passwordUpdated } = this.props.user.data
		const success = (
			<div>
				<h1>Update Password</h1>
				<p>Success! Your password has been changed.</p>
			</div>
		)
		const updateForm = (
			<form onSubmit={this.onHandleSubmit}>
				<h1 size="large">Update Password</h1>
				<Input
					placeholder="Current Password"
					type="password"
					name="currentPassword"
					onChange={this.handleInputChange}
					required
				/>
				<Input
					placeholder="New Password"
					type="password"
					name="newPassword"
					onChange={this.handleInputChange}
					required
					toggleHiddenText
				/>
				<Button classes="float-right">Reset</Button>
				{message && <Message>{message}</Message>}
			</form>
		)
		return <FlexContainer centered>{passwordUpdated ? success : updateForm}</FlexContainer>
	}
}

function mapStateToProps(state, ownProps) {
	return {
		user: state.user
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePassword)
