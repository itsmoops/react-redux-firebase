class Input extends React.PureComponent {
    render() {
        let classes = 'input'
        if (this.props.disabled) {
            classes = `${classes} input-disabled`
        }
        return (
            <input
                className={classes}
                placeholder={this.props.placeholder}
                type={this.props.type}
                onInput={this.props.onInput}
                required={this.props.required} />
        )
    }
}

Input.defaultProps = {
    type: 'text'
}

Input.propTypes = {
    type: PropTypes.string
}

export default Input
