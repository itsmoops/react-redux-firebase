import {Link} from 'react-router-dom'
import {Grid, Header} from 'semantic-ui-react'

class HomePage extends React.Component {
    render() {
        return (
            <Grid columns={3} className="max-height-minus-nav">
                <Grid.Row verticalAlign="middle" centered>
                    <Grid.Column textAlign="center" width={6}>
                        <Header size="large">Home</Header>
                        <Link to="/about">About</Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default HomePage
