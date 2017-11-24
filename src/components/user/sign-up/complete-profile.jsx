import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Box, Heading, Container, Text } from 'rebass'
import * as userActions from '../../../actions/user-actions'
import Flex from '../../shared/flex'
import Input from '../../shared/input'
import Button from '../../shared/button'
import Message from '../../shared/message'
import DatePicker from '../../shared/date-picker'
import StatePicker from '../../shared/state-picker'

class CompleteProfile extends React.Component {
	state = {
		email: '',
		password: '',
		submitting: false
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
		// this.setState({ submitting: true })
		// await this.props.actions.userSignUp(this.state.email, this.state.password)
		// await this.props.actions.sendEmailVerification()
		if (!this.props.user.message) {
			this.props.handleStateChange('thankYou')
		}
	}
	render() {
		const { message } = this.props.user
		return (
			<Container>
				<form onSubmit={this.onHandleSubmit}>
					<Heading mb={20}>Complete your profile</Heading>
					<Input
						placeholder="Address Line 1"
						type="address1"
						name="text"
						onChange={this.handleInputChange}
						required
					/>
					<Input
						placeholder="Address Line 2"
						type="address2"
						name="text"
						onChange={this.handleInputChange}
					/>
					<Input
						placeholder="City"
						type="text"
						name="city"
						onChange={this.handleInputChange}
					/>
					<StatePicker />
					<Input
						placeholder="Zipcode"
						type="number"
						name="zipcode"
						onChange={this.handleInputChange}
					/>
					<DatePicker />
					<Button>Complete Profile</Button>
					{message && <Message>{message}</Message>}
				</form>
			</Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(CompleteProfile)
