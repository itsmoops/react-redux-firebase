import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import * as userActions from '../../actions/user-actions'
import FlexContainer from '../shared/flex-container'
import Input from '../shared/input'
import Button from '../shared/button'
import Message from '../shared/message'
import Link from '../shared/link'

class Login extends React.Component {
	state = {
		email: '',
		password: ''
	}
	componentDidMount() {
		document.title = 'Login'
	}
	componentWillUnmount() {
		this.props.actions.sanitizeUserState()
		this.props.actions.sanitizeUserErrorState()
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.user.authenticated) {
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
		await this.props.actions.userLogin(this.state.email, this.state.password)
		if (this.props.user.authenticated) {
			this.props.history.push('/account')
		}
	}
	render() {
		const { message } = this.props.user
		return (
			<FlexContainer>
				<form onSubmit={this.onHandleSubmit}>
					<h1>Login</h1>
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
					<Button>Login</Button>
					<Link to="/forgot-password" right>
						I forgot my password
					</Link>
					{message && <Message>{message}</Message>}
				</form>
			</FlexContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
