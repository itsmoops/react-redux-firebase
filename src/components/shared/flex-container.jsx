import './flex-container.less'
/**
 * FlexContainer - Wrapper that builds a responsive flexbox
 */
class FlexContainer extends React.PureComponent {
    render() {
        let classes = 'flex-container'
        if (this.props.centered) {
            classes = `${classes} centered`
        }
        return (
            <div className={`${classes}`}>
                <div
                    className={`${this.props.large} ${this.props.medium} ${this.props.small} ${this
                        .props.xsmall}`}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

// default responsive column widths
FlexContainer.defaultProps = {
    large: 'flex-lg',
    medium: 'flex-md',
    small: 'flex-sm',
    xsmall: 'flex-x-sm'
}

FlexContainer.propTypes = {
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
    xsmall: PropTypes.string
}

export default FlexContainer
