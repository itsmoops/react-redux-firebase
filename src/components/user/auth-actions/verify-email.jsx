import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../actions/user-actions'
import Message from '../../shared/message'

class VerifyEmail extends React.Component {
    componentWillMount() {
        document.title = 'Verify Email'
        this.props.actions.verifyEmailCode(this.props.params.oobCode)
    }
    componentWillUnmount() {
        this.props.actions.sanitizeUserState()
        this.props.actions.sanitizeUserErrorState()
    }
    render() {
        const success = <p>Success! Your email has been verified.</p>
        const { codeVerified, message } = this.props.user
        return (
            <div>
                <h1>Verify Email</h1>
                {codeVerified && success}
                {message && <Message>{message}</Message>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { user: state.user }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail)
