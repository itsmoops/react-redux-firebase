import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/user-actions'
import FlexContainer from '../shared/flex-container'
import Input from '../shared/input'
import Button from '../shared/button'
import Message from '../shared/message'

class UpdatePassword extends React.Component {
	state = {
		password: ''
	}
	componentDidMount() {
		document.title = 'Update Password'
	}
	componentWillUnmount() {
		if (this.props.user.error.message) {
			this.props.actions.clearUserErrorMessage()
		}
	}
	handleInputChange = e => {
		const type = e.target.type
		const value = e.target.value
		this.setState({ [type]: value })
	}
	onHandleSubmit = async e => {
		e.preventDefault()
		await this.props.actions.userUpdatePassword(this.state.password)
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
					placeholder="New Password"
					type="password"
					onInput={this.handleInputChange}
					required
					toggleHiddenText
				/>
				<Button>Submit</Button>
				{message && <Message>{message}</Message>}
			</form>
		)
		return <FlexContainer>{passwordUpdated ? success : updateForm}</FlexContainer>
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
