import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import onClickOutside from 'react-onclickoutside'
import styled from 'styled-components'
import * as globalActions from '../../actions/global-actions'
import ProfilePicture from './profile-picture'
import { caretDown } from 'react-icons-kit/fa/caretDown'

const StyledDropdownButton = styled.button`
	outline: none;
	background: none;
	border: none;
	cursor: pointer;
`

const StyledDropdownContent = styled.div`
	width: 212px;
	border: 1px solid ${colors.background.darken(0.2)};
	display: none;
	position: absolute;
	background-color: ${colors.background};
	z-index: 1;
	top: 59px;
	right: 0;
	display: ${props => (props.open ? 'block' : 'none')};
`
const StyledIcon = styled(Icon)`
	padding-left: 5px;
`

const DropdownHeader = horizontalCenter(props => (
	<StyledDropdownButton onClick={props.onClick}>{props.children}</StyledDropdownButton>
))

class Dropdown extends React.PureComponent {
	handleClickOutside = () => {
		this.props.actions.toggleMenuDropdown(false)
	}

	toggleDropDown = () => {
		this.props.actions.toggleMenuDropdown(!this.props.global.menuOpen)
	}

	render() {
		return (
			<div>
				<DropdownHeader onClick={this.toggleDropDown}>
					<ProfilePicture tiny />
					<StyledIcon icon={caretDown} />
				</DropdownHeader>
				<StyledDropdownContent open={this.props.global.menuOpen}>
					{this.props.children}
				</StyledDropdownContent>
			</div>
		)
	}
}

Dropdown.defaultProps = {
	value: ''
}

Dropdown.propTypes = {
	value: PropTypes.string
}

function mapStateToProps(state, ownProps) {
	return {
		global: state.global,
		user: state.user
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(globalActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(Dropdown))
