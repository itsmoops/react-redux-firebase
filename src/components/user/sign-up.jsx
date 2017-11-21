import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/user-actions'
import FlexContainer from '../shared/flex-container'
import Input from '../shared/input'
import Button from '../shared/button'
import Message from '../shared/message'

class SignUp extends React.Component {
	state = {
		email: '',
		password: '',
		submitting: false
	}
	componentWillMount() {
		document.title = 'Sign Up'
	}
	componentWillUnmount() {
		this.props.actions.sanitizeUserState()
		this.props.actions.sanitizeUserErrorState()
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.user.authenticated && !this.state.submitting) {
			this.props.history.push('/')
		}
	}
	handleInputChange = e => {
		const name = e.target.name
		const value = e.target.value
		this.setState({ [name]: value })
	}
	onHandleSubmit = async e => {
		e.preventDefault()
		this.setState({ submitting: true })
		await this.props.actions.userSignUp(this.state.email, this.state.password)
		this.props.actions.sendEmailVerification()
	}
	render() {
		const { message, email, emailSent } = this.props.user
		const thankYou = (
			<div>
				<h1>Confirm Your Email</h1>
				<p>
					Thanks! We just sent a confirmation email to {email}. Please follow the
					instructions in the email to verify your account.
				</p>
			</div>
		)
		const signUpForm = (
			<form onSubmit={this.onHandleSubmit}>
				<h1>Sign Up</h1>
				<Input
					placeholder="Email"
					type="email"
					name="email"
					onChange={this.handleInputChange}
					required
				/>
				<Input
					placeholder="Password"
					type="password"
					name="password"
					onChange={this.handleInputChange}
					required
				/>
				<Button>Sign Up</Button>
				{message && <Message>{message}</Message>}
			</form>
		)
		return <FlexContainer>{emailSent ? thankYou : signUpForm}</FlexContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
