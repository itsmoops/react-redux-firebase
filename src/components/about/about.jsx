import {Link} from 'react-router-dom'
import {Container, Header} from 'semantic-ui-react'

class About extends React.Component {
    render() {
        return (
            <Container>
                <Header size="large">About</Header>
                <Link to="/">Landing</Link>
            </Container>
        )
    }
}

export default About
