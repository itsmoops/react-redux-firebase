import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import * as userActions from '../../../actions/user-actions'
import * as globalActions from '../../../actions/global-actions'
import Button from '../../shared/button'
import Input from '../../shared/input'
import Message from '../../shared/message'

class ProfileContentEditor extends React.Component {
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
		return <div>Testing</div>
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
