import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Box, Heading, Container, Text } from 'rebass'
import * as userActions from '../../actions/user-actions'
import Flex from '../shared/flex'
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
			<Container>
				<Heading>Confirm Your Email</Heading>
				<Text>
					Thanks! We just sent a confirmation email to {email}. Please follow the
					instructions in the email to verify your account.
				</Text>
			</Container>
		)
		const signUpForm = (
			<Container>
				<form onSubmit={this.onHandleSubmit}>
					<Heading>Sign Up</Heading>
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
			</Container>
		)
		return (
			<Flex>
				<Box w={[1, 3 / 4, 2 / 3, 1 / 2]} m="auto">
					{emailSent ? thankYou : signUpForm}
				</Box>
			</Flex>
		)
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
