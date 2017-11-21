import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../actions/user-actions'

const RecoverEmail = props => (
    <div>
        <h1>Recover Email Address</h1>
        <div>Change yo shit</div>
    </div>
)

function mapStateToProps(state) {
    return { user: state.user }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecoverEmail)
