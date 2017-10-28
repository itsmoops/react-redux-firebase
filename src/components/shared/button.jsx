import './button.less'

class Button extends React.PureComponent {
    render() {
        let classes = 'btn'
        if (this.props.right) {
            classes = `${classes} float-right`
        }
        if (this.props.left) {
            classes = `${classes} float-left`
        }
        if (this.props.disabled) {
            classes = `${classes} disabled`
        }
        return (
            <button type={this.props.type || 'submit'} className={classes}>
                {this.props.children}
            </button>
        )
    }
}

Button.defaultProps = {
    left: false,
    right: false,
    disabled: false
}

Button.propTypes = {
    left: PropTypes.bool,
    right: PropTypes.bool,
    disabled: PropTypes.bool
}

export default Button
