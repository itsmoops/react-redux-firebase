import FlexContainer from '../../shared/flex-container'
import ResetPassword from './reset-password'
import VerifyEmail from './verify-email'

class AuthAction extends React.PureComponent {
	state = {
		result: {}
	}
	componentWillMount() {
		const query = this.props.location.search.substring(1)
		if (query === '') {
			this.props.history.push('/')
		} else {
			const result = {}
			query.split('&').forEach(part => {
				const item = part.split('=')
				result[item[0]] = decodeURIComponent(item[1])
			})
			this.setState({
				result
			})
		}
	}
	render() {
		let Action
		switch (this.state.result.mode) {
			case 'resetPassword':
				Action = ResetPassword
				break
			case 'verifyEmail':
				Action = VerifyEmail
				break
			default:
				Action = ResetPassword
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
