import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import * as userActions from '../../actions/user-actions'
import FlexContainer from '../shared/flex-container'
import Input from '../shared/input'
import Button from '../shared/button'
import Message from '../shared/message'

class ForgotPassword extends React.Component {
	state = {
		email: ''
	}
	componentDidMount() {
		document.title = 'Forgot Password'
	}
	componentWillUnmount() {
		this.props.actions.sanitizeUserState()
		this.props.actions.sanitizeUserErrorState()
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.user.data.authenticated) {
			this.props.history.push('/')
		}
	}
	handleInputChange = e => {
		const type = e.target.type
		const value = e.target.value
		this.setState({ [type]: value })
	}
	onHandleSubmit = async e => {
		e.preventDefault()
		this.props.actions.sendPasswordResetEmail(this.state.email)
	}
	render() {
		const { message } = this.props.user.error
		const { emailSent } = this.props.user.data
		const thankYou = (
			<div>
				<h1>Recover Password</h1>
				<p>Thanks! Please check your email for reset instructions.</p>
			</div>
		)
		const resetForm = (
			<form onSubmit={this.onHandleSubmit}>
				<h1>Recover Password</h1>
				<p>Enter your email address and a password reset email will be sent to you.</p>
				<Input
					placeholder="Email"
					type="email"
					onChange={this.handleInputChange}
					required
				/>

				<Button>Submit</Button>
				{message && <Message>{message}</Message>}
			</form>
		)
		return <FlexContainer centered>{emailSent ? thankYou : resetForm}</FlexContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
