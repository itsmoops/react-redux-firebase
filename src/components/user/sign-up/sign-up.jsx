import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Box, Heading, Container, Text } from 'rebass'
import Flex from '../../shared/flex'
import CreateUser from './create-user'
import CompleteProfile from './complete-profile'
import ThankYou from './thank-you'

class SignUp extends React.Component {
	state = {
		activeState: 'createUser'
	}
	componentWillMount() {
		document.title = 'Sign Up'
	}
	componentWillUnmount() {
		this.props.actions.sanitizeUserState()
		this.props.actions.sanitizeUserErrorState()
	}
	handleStateChange = state => {
		this.setState({
			activeState: state
		})
	}
	render() {
		let ActiveState
		switch (this.state.activeState) {
			case 'createUser':
				ActiveState = CreateUser
				break
			case 'completeProfile':
				ActiveState = CompleteProfile
				break
			case 'thankYou':
				ActiveState = ThankYou
				break
			default:
				ActiveState = CreateUser
				break
		}
		const { email } = this.props.user
		return (
			<Flex>
				<Box w={[1, 3 / 4, 2 / 3, 1 / 2]} m="auto">
					<ActiveState handleStateChange={this.handleStateChange} email={email} />
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

export default connect(mapStateToProps)(SignUp)
