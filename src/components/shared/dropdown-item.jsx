import { withRouter } from 'react-router'
import './dropdown-item.less'

function DropdownItem(props) {
    let classes = 'dropdown-item'
    if (props.align === 'left') {
        classes = `${classes} align-left`
    } else if (props.align === 'right') {
        classes = `${classes} align-right`
    }
    if (props.active) {
        classes = `${classes} dropdown-active`
    }
    return (
        <a
          className={classes}
          onClick={() => {
                props.linkTo && props.history.push(props.linkTo)
                props.onClick && props.onClick()
            }}
          role="button"
          tabIndex="0"
        >
            {props.children} {props.value}
        </a>
    )
}

DropdownItem.defaultProps = {
    value: ''
}

DropdownItem.propTypes = {
    value: PropTypes.string
}

export default withRouter(DropdownItem)
