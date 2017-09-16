import FlexContainer from '../shared/flex-container'

class NotFound extends React.Component {
    componentDidMount() {
        document.title = 'Page Not Found'
    }
    render() {
        return (
            <FlexContainer>
                <h1>404</h1>
                <h2>Page not found!</h2>
            </FlexContainer>
        )
    }
}

export default NotFound
