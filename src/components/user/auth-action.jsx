import FlexContainer from '../shared/flex-container'
import RecoverEmail from './auth-actions/recover-email'
import ResetPassword from './auth-actions/reset-password'
import VerifyEmail from './auth-actions/verify-email'

class AuthAction extends React.PureComponent {
	state = {
		result: {}
	}
	componentWillMount() {
		const query = this.props.location.search.substring(1)
		const result = {}
		query.split('&').forEach(part => {
			const item = part.split('=')
			result[item[0]] = decodeURIComponent(item[1])
		})
		this.setState({
			result
		})
	}
	render() {
		let Action
		switch (this.state.result.mode) {
			case 'recoverEmail':
				Action = RecoverEmail
				break
			case 'resetPassword':
				Action = ResetPassword
				break
			case 'verifyEmail':
				Action = VerifyEmail
				break
			default:
				break
		}
		return (
			<FlexContainer centered>
				<Action params={this.state.result} />
			</FlexContainer>
		)
	}
}

export default AuthAction
