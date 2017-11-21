import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../actions/user-actions'
import Input from '../../shared/input'
import Button from '../../shared/button'
import Message from '../../shared/message'

class ResetPassword extends React.Component {
	componentDidMount() {
		document.title = 'Reset Password'
		this.props.actions.verifyPasswordResetCode(this.props.params.oobCode)
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
		if (this.props.user.passwordResetCodeVerified) {
			await this.props.actions.confirmPasswordReset(
				this.props.params.oobCode,
				this.state.newPassword
			)
		}
	}
	render() {
		const { message } = this.props.user
		const resetForm = (
			<form onSubmit={this.onHandleSubmit}>
				<h1>Reset Your Password</h1>
				<Input
					placeholder="New Password"
					type="password"
					name="newPassword"
					onChange={this.handleInputChange}
					required
					toggleHiddenText
				/>
				<Button>Reset</Button>
				{message && <Message>{message}</Message>}
			</form>
		)
		return resetForm
	}
}

function mapStateToProps(state) {
	return { user: state.user }
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
