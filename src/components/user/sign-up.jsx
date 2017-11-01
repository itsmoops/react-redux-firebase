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
		password: ''
	}
	componentDidMount() {
		document.title = 'Sign Up'
	}
	componentWillUnmount() {
		if (this.props.user.error.message) {
			this.props.actions.clearUserErrorMessage()
		}
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
		await this.props.actions.userSignUp(this.state.email, this.state.password)
		if (this.props.user.data.authenticated) {
			this.props.history.push('/profile')
		}
	}
	render() {
		const { message } = this.props.user.error
		return (
			<FlexContainer>
				<form onSubmit={this.onHandleSubmit}>
					<h1 size="large">Sign Up</h1>
					<Input
						placeholder="Email"
						type="email"
						onInput={this.handleInputChange}
						required
					/>
					<Input
						placeholder="Password"
						type="password"
						onInput={this.handleInputChange}
						required
					/>
					<Button>Sign Up</Button>
					{message && <Message>{message}</Message>}
				</form>
			</FlexContainer>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		user: state.user // determined by our reducers/index.js file
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
