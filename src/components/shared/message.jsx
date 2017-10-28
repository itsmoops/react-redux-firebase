import './message.less'

class Message extends React.PureComponent {
    render() {
        let classes = 'message'
        if (this.props.type === 'success') {
            classes = `${classes} message-success`
        }
        if (this.props.type === 'warn') {
            classes = `${classes} message-warn`
        }
        if (this.props.type === 'error') {
            classes = `${classes} message-error`
        }
        return <div className={classes}>{this.props.children}</div>
    }
}

Message.defaultProps = {
    type: 'error'
}

Message.propTypes = {
    type: PropTypes.string
}

export default Message
