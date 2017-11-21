import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AvatarEditor from 'react-avatar-editor'
import styled from 'styled-components'
import { userCircle } from 'react-icons-kit/fa/userCircle'
import { rotateRight } from 'react-icons-kit/fa/rotateRight'
import * as userActions from '../../../actions/user-actions'
import * as globalActions from '../../../actions/global-actions'
import FlexContainer from '../../shared/flex-container'
import Button from '../../shared/button'
import Input from '../../shared/input'
import Slider from '../../shared/slider'
import Message from '../../shared/message'

const StyledDiv = styled.div`
	display: flex;
	display: -webkit-flex;
	align-items: center;
	-webkit-align-items: center;
	justify-content: center;
	-webkit-justify-content: center;
	padding: 20 0 20 0;
	&:hover {
		cursor: ${props => (props.pictureLoaded && props.moveable ? 'move' : 'initial')};
	}
`

const StyledGreyDiv = styled(StyledDiv)`
	color: ${colors.background.darken(0.1)};
	&:hover {
		cursor: initial;
	}
`

const StyledIconContainer = styled.button`
	position: absolute;
	cursor: pointer;
	padding: 10px;
	margin-top: 125px;
	margin-left: 125px;
	background: none;
	border: none;
	outline: none;
	${props => props.disabled && props.theme.disabled};
`

class Profile extends React.Component {
	state = {
		name: undefined
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.user) {
			if (!nextProps.user.authenticated) {
				this.props.history.push('/')
			}
		}
	}
	render() {
		return <FlexContainer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
