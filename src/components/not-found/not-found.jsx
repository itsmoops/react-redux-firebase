import { Header } from 'semantic-ui-react'
import FlexContainer from '../shared/flex-container'

class NotFound extends React.Component {
    componentDidMount() {
        document.title = 'Page Not Found'
    }
    render() {
        return (
            <FlexContainer>
                <Header size="large">404</Header>
				<Header size="medium">Page not found!</Header>
            </FlexContainer>
        )
    }
}

export default NotFound
