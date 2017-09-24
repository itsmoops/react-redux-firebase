import { connect } from 'react-redux'
import './loading-spinner.less'

function LoadingSpinner(props) {
    if (props.global.loading) {
        return (
            <div>
                <div className="overlay" />
                <div className="loader" />
            </div>
        )
    }
    return null
}

function mapStateToProps(state) {
    return {
        global: state.global
    }
}

export default connect(mapStateToProps)(LoadingSpinner)
