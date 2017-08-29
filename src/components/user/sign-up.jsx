import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/user-actions'
import { Grid, Header, Form, Message, Input, Checkbox, Button } from 'semantic-ui-react'
import FlexContainer from '../shared/flex-container'

class SignUp extends React.Component {
	state = {
		email: '',
		password: ''
	}
	componentDidMount() {
		document.title = 'Sign Up'
		if (this.props.user.authenticated) {
			this.props.history.push('/')
		}
	}
	handleInputChange = e => {
		const type = e.target.type
		const value = e.target.value
		this.setState({ [type]: value })
	}
	onClickSubmit = e => {
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
				<Header size="large">Sign Up</Header>
				<Form size="big" loading={this.props.user.loading}>
					<Form.Field>
						<Input
							transparent
							type="email"
							placeholder="Email"
							onChange={this.handleInputChange}
						/>
					</Form.Field>
					<Form.Field>
						<Input
							transparent
							type="password"
							placeholder="Password"
							onChange={this.handleInputChange}
						/>
					</Form.Field>
					<Form.Field>
						<Checkbox label="I agree to the Terms and Conditions" />
					</Form.Field>
					<Message
						error
						size="tiny"
						header="Error signing up"
						content={this.props.user.message}
						visible={!!this.props.user.message}
					/>
					<Button type="submit" size="big" floated="right" onClick={this.onClickSubmit}>
						Sign Up
					</Button>
				</Form>
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
