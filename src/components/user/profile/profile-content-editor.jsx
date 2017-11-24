import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { Container, Label, Flex, Box } from 'rebass'
import * as userActions from '../../../actions/user-actions'
import * as globalActions from '../../../actions/global-actions'
import Button from '../../shared/button'
import Input from '../../shared/input'
import Message from '../../shared/message'
import DatePicker from '../../shared/date-picker'

class ProfileContentEditor extends React.Component {
	state = {
		firstName: undefined,
		lastName: undefined,
		email: undefined,
		birthDay: '1',
		birthMonth: '1',
		birthYear: new Date().getFullYear().toString(),
		phoneNumber: undefined
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.user) {
			if (!nextProps.user.authenticated) {
				this.props.history.push('/')
			}
		}
	}
	handleInputChange = e => {
		const name = e.target.name
		const value = e.target.value
		this.setState({ [name]: value })
	}
	onHandleSubmit = async e => {
		e.preventDefault()
		// await this.props.actions.userLogin(this.state.email, this.state.password)
		// if (this.props.user.authenticated) {
		// 	this.props.history.push('/')
		// }
	}
	render() {
		const { user } = this.props
		return (
			<Container px={0}>
				<form onSubmit={this.onHandleSubmit}>
					<Flex wrap>
						<Box w={[1, 1, 1 / 5]}>
							<Label pt={20} mb={0}>
								First Name
							</Label>
						</Box>
						<Box w={[1, 1, 4 / 5]}>
							<Input
								type="text"
								name="firstName"
								placeholder={user.firstName}
								value={this.state.firstName}
								onChange={this.handleInputChange}
							/>
						</Box>
						<Box w={[1, 1, 1 / 5]}>
							<Label pt={20} mb={0}>
								Last Name
							</Label>
						</Box>
						<Box w={[1, 1, 4 / 5]}>
							<Input
								type="text"
								name="lastName"
								placeholder={user.lastName}
								value={this.state.lastName}
								onChange={this.handleInputChange}
							/>
						</Box>
						<Box w={[1, 1, 1 / 5]}>
							<Label pt={20} mb={0}>
								Birth Date
							</Label>
						</Box>
						<Box w={[1, 1, 4 / 5]}>
							<DatePicker onChange={this.handleInputChange} />
						</Box>
						<Box w={[1, 1, 1 / 5]}>
							<Label pt={20} mb={0}>
								Email Address
							</Label>
						</Box>
						<Box w={[1, 1, 4 / 5]}>
							<Input
								type="email"
								name="email"
								placeholder={user.email}
								value={this.state.email}
								onChange={this.handleInputChange}
							/>
						</Box>
						<Box w={[1, 1, 1 / 5]}>
							<Label pt={20} mb={0}>
								Phone Number
							</Label>
						</Box>
						<Box w={[1, 1, 4 / 5]}>
							<Input
								type="tel"
								name="phoneNumber"
								placeholder={user.phoneNumber}
								value={this.state.phoneNumber}
								pattern="^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$"
								onChange={this.handleInputChange}
							/>
						</Box>
					</Flex>
					<Button>Save</Button>
				</form>
			</Container>
		)
	}
}

function mapStateToProps(state) {
	return { user: state.user }
}

function mapDispatchToProps(dispatch) {
	return {
		userActions: bindActionCreators(userActions, dispatch),
		globalActions: bindActionCreators(globalActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContentEditor)
