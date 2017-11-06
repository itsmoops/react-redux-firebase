import { connect } from 'react-redux'
import { userCircle } from 'react-icons-kit/fa/userCircle'
import './profile-picture.less'

const ProfilePicture = (props) => {
    let classes = 'profile-picture'
    let width = 50
    let height = 50
    if (props.tiny) {
        classes = `${classes} profile-picture-tiny`
        width = 28
        height = 28
    } else if (props.small) {
        classes = `${classes} profile-picture-small`
        width = 50
        height = 50
    } else if (props.medium) {
        classes = `${classes} profile-picture-medium`
        width = 100
        height = 100
    } else if (props.large) {
        classes = `${classes} profile-picture-large`
        width = 150
        height = 150
    } else if (props.huge) {
        classes = `${classes} profile-picture-huge`
        width = 200
        height = 200
    }
    let icon
    if (props.user.data.photoURL) {
        icon = (
            <img
                width={width}
                height={height}
                alt={props.user.data.displayName || props.user.data.email}
                src={props.user.data.photoURL} />
        )
    } else {
        icon = <Icon icon={userCircle} size={width} />
    }
    return <span className={classes}>{icon}</span>
}

ProfilePicture.defaultProps = {
    tiny: false,
    small: false,
    medium: false,
    large: false,
    huge: false
}

ProfilePicture.propTypes = {
    tiny: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    huge: PropTypes.bool
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ProfilePicture)
