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
		if (this.props.user.authenticated) {
			// this.props.history.push('/')
		}
	}
	handleInputChange = e => {
		const type = e.target.type
		const value = e.target.value
		this.setState({ [type]: value })
	}
	onHandleSubmit = e => {
		e.preventDefault()
		this.props.actions
			.userSignUp({ email: this.state.email, password: this.state.password })
			.then(() => {
				if (this.props.user.authenticated) {
					this.props.history.push('/profile')
				}
			})
	}
	render() {
		return (
			<FlexContainer>
				<form onSubmit={this.onHandleSubmit}>
					<h1 size="large">Sign Up</h1>
					<Input placeholder="Email" type="email" onInput={this.handleInputChange} />
					<Input
						placeholder="Password"
						type="password"
						onInput={this.handleInputChange}
					/>
					<Button>Sign Up</Button>
					{this.props.user.message && <Message>{this.props.user.message}</Message>}
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
