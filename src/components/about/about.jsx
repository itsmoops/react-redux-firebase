import {Link} from 'react-router-dom'
import {Container, Header} from 'semantic-ui-react'
import FlexContainer from '../shared/flex-container'

class About extends React.Component {
    render() {
        return (
            <FlexContainer>
                <Header size="large">About</Header>
                <Container textAlign="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Container>
            </FlexContainer>
        )
    }
}
export default About
