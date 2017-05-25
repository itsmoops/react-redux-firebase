import {Link} from 'react-router-dom'
import {Container, Header} from 'semantic-ui-react'

class Landing extends React.Component {
    render() {
        return (
            <Container>
                <Header size="large">Landing</Header>
                <Link to="/about">About</Link>
            </Container>
        )
    }
}

export default Landing
