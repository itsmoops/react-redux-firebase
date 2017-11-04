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
                <div className={`${this.props.desktop} ${this.props.tablet} ${this.props.mobile}`}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

// default responsive column widths
FlexContainer.defaultProps = {
    desktop: 'flex-lg',
    tablet: 'flex-md',
    mobile: 'flex-sm'
}

FlexContainer.propTypes = {
    desktop: PropTypes.string,
    tablet: PropTypes.string,
    mobile: PropTypes.string
}

export default FlexContainer
