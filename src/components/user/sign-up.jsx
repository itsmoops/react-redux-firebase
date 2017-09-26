import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/user-actions'
import FlexContainer from '../shared/flex-container'
import Input from '../shared/input'
import Button from '../shared/button'

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
	onClickSubmit = () => {
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
				<h1 size="large">Sign Up</h1>
				<Input type="email" onInput={this.handleInputChange} />
				<Input type="password" onInput={this.handleInputChange} />
				<Button right onClick={this.onClickSubmit}>
					Sign Up
				</Button>
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
