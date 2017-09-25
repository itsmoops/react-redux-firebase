import './dropdown.less'

class Dropdown extends React.PureComponent {
    render() {
        return (
            <div className="dropdown">
                <span>Mouse over me</span>
                <div className="dropdown-content">
                    <p>Hello World!</p>
                </div>
            </div>
        )
    }
}

export default Dropdown
